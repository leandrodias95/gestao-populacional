import { FerramentasDalistagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () =>{
    return(
        <LayoutBaseDePagina titulo='Página Inicial'
         barraDeFerramentas={(
            <FerramentasDalistagem
            mostrarInputBusca
            textoBotaoNovo='Nova'
            />
         )} >
            Testando
        </LayoutBaseDePagina>

    );
};