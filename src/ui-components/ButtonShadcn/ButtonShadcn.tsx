import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
};

function ButtonShadcn({ children }: Props) {
  return (
    <Button
      onClick={() => {
        console.log('shadcn button clicked');
      }}
      className='bg-blue-500 text-white hover:bg-blue-900'
    >
      <p className='text-sm text-red-700'>This is shadcn button</p>
      {children}
    </Button>
  );
}

export default ButtonShadcn;
