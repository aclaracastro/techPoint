import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import './Main.css'
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '14px' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    
    <div className='container-faq'>
    
      <Divider component="div" role="presentation" sx={{ marginTop: '15px', borderColor: '070707' }} />
        <Typography variant='h4' component='h2' gutterBottom id='titulo-faq'> Perguntas Frequentes <LiveHelpIcon/> </Typography> 

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" > {/*precisa ter id pra mexer no css*/}
          <Typography>Como posso aproveitar o frete grátis em minha compra?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O frete grátis é oferecido em algumas promoções ou em compras acima de um valor mínimo. Fique de olho nas ofertas especiais ou consulte as condições de frete grátis na página de cada produto ou no momento do checkout.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Quais são os critérios para escolher o PC ideal para mim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A escolha do PC depende do seu uso principal. Se for para jogos, procure por um modelo com boa placa de vídeo e processador rápido. Para tarefas do dia a dia, um PC com um bom equilíbrio de desempenho e preço pode ser o suficiente. Se você precisa de um PC para trabalho profissional, opte por um com especificações que atendam ao seu software específico.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Como posso garantir que estou escolhendo o fone perfeito para minhas necessidades?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Considere fatores como a qualidade de som (se você prioriza graves, clareza ou equilíbrio), conforto (especialmente se for usar por longos períodos), conectividade (wireless ou com fio) e outras características como cancelamento de ruído ou resistência à água, dependendo de sua utilização.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>O que significa "pronta entrega" e como isso impacta o tempo de envio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Produtos com "pronta entrega" estão disponíveis em estoque e podem ser enviados imediatamente após a confirmação do pagamento. Isso garante que seu pedido chegue mais rápido. Produtos sem pronta entrega podem ter um tempo de envio maior, dependendo da disponibilidade ou da necessidade de reposição.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Posso alterar ou cancelar minha compra depois de finalizar o pedido?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Alterações e cancelamentos podem ser realizados, mas é necessário verificar as políticas específicas da loja e o tempo que passou desde a confirmação do pedido. Em muitos casos, é possível solicitar modificações ou cancelamentos dentro de um prazo determinado, antes que o pedido seja processado ou enviado.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Quais formas de pagamento posso utilizar para finalizar minha compra de forma segura?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aceitamos diversas formas de pagamento, como cartões de crédito, boleto bancário, transferências e plataformas de pagamento online como PayPal. Todos os métodos são seguros, com criptografia para proteger seus dados e garantir uma transação tranquila.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
