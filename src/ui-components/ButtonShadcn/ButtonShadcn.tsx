import { Button } from '@/src/components/ui/button';

type Props = {
  children: React.ReactNode;
};

function ButtonShadcn({ children }: Props) {
  return (
    <Button
      onClick={() => {
        console.log('shadcn button clicked');
      }}
    >
      <p className='text-3xl text-red-700'>This is shadcn button</p>
      {children}
    </Button>
  );
}

export default ButtonShadcn;
