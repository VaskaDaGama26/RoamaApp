import AccordionBlock from './AccordionBlock';
import '../../index.css';
import '../../colors.css';

export default {
  title: 'components/AccordionBlock',
  component: AccordionBlock,
  tags: ['autodocs'],
};

export const Default = () => {
  const data = [
    {
      title: 'Заголовок 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad sequi ea tempore ullam deserunt, eligendi dolore alias necessitatibus autem.',
    },
  ];
  return <AccordionBlock defaultOpenIndex={null} data={data} />;
};

export const WithLongTitleAndText = () => {
  const data = [
    {
      title:
        'Двустрочный длинный заголовок для аккордеона соответственно займёт две строки друг под другом ничего при этом не ломая',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad sequi ea tempore ullam deserunt, eligendi dolore alias necessitatibus autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad sequi ea tempore ullam deserunt, eligendi dolore alias necessitatibus autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad sequi ea tempore ullam deserunt, eligendi dolore alias necessitatibus autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad sequi ea tempore ullam deserunt, eligendi dolore alias necessitatibus autem.',
    },
  ];
  return <AccordionBlock defaultOpenIndex={null} data={data} />;
};

export const MultipleItems = () => {
  const data = [
    { title: 'Заголовок 1', text: 'Текст 1' },
    { title: 'Заголовок 2', text: 'Текст 2' },
    { title: 'Заголовок 3', text: 'Текст 3' },
  ];
  return <AccordionBlock defaultOpenIndex={null} data={data} />;
};

export const WithDefaultOpenIndex = () => {
  const data = [
    { title: 'Заголовок 1', text: 'Текст 1' },
    { title: 'Заголовок 2', text: 'Текст 2' },
    { title: 'Заголовок 3', text: 'Текст 3' },
  ];
  return <AccordionBlock data={data} />;
};
