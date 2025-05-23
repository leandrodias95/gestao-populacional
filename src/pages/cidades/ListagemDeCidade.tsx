import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FerramentasDalistagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);


  return (
    <LayoutBaseDePagina
          titulo='Listagem de cidades'
          barraDeFerramentas={<FerramentasDalistagem
              mostrarInputBusca
              textoDaBusca={busca}
              textoBotaoNovo='Nova'
              aoMudarTextDeBusca={(texto: any) => setSearchParams({ busca: texto }, { replace: true })} />} children={undefined}    >

    </LayoutBaseDePagina>
  );
};