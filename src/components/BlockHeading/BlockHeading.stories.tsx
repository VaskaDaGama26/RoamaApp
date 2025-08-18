import BlockHeading from './BlockHeading';
import '../../index.css';
import '../../colors.css';
import '../../colors.css';
import explorer from '/static/icons/practical/explorer.svg';

export default {
  title: 'components/BlockHeading',
  component: BlockHeading,
  tags: ['autodocs'],
};

export const Default = () => {
  return <BlockHeading label="Стандартный заголовок секции" />;
};

export const WithLongText = () => {
  return (
    <div style={{ width: '400px', border: '1px dashed gray', padding: '20px' }}>
      <BlockHeading label="Длинный заголовок секции становится двустрочным" />
    </div>
  );
};

export const WithImage = () => {
  return (
    <BlockHeading
      label="Заголовок с картинкой"
      image={explorer}
      imageClasses="top-18 lg:top-0 right-0 sm:right-14 h-14"
    />
  );
};

export const ResponsivePreview = () => (
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    <div style={{ width: '320px', border: '1px dashed gray', padding: '20px' }}>
      <BlockHeading label="Mobile" />
    </div>
    <div style={{ width: '768px', border: '1px dashed gray', padding: '20px' }}>
      <BlockHeading label="Tablet" />
    </div>
    <div style={{ width: '1024px', border: '1px dashed gray', padding: '20px' }}>
      <BlockHeading label="Desktop" />
    </div>
  </div>
);
