import { useState, useEffect } from 'react';
import { getCompaniesAll } from '../services';
import { loadAbort } from '@/utilities';
import { ICompany } from '../model';
import { companyAdapter } from '../adapters';

const useCompanies = (isDelete: boolean) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [controller, setController] = useState<AbortController>();

  useEffect(() => {
    const controller = loadAbort();
    setController(controller);

    getCompaniesAll('getCompaniesAll', controller)
      .then(({ data }) => {
        const dataAdap = companyAdapter(data);
        setCompanies(dataAdap);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Cancelled request');
        } else {
          setError(error);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [isDelete]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError('Cancelled Request');
    }
  };

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  
  return { companies, isLoading, error, handleCancelRequest, handleIsLoading };
};

export default useCompanies;
