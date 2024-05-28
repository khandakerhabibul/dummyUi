import { Button } from '@/components/ui/button';

function ButtonShadcn() {
  return (
    <Button
      onClick={() => {
        console.log('shadcn button clicked');
      }}
    >
      <p className='text-3xl text-red-700'>This is shadcn button</p>
    </Button>
  );
}

export default ButtonShadcn;
