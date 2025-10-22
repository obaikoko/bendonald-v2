'use client';

import { useState } from 'react';
import {
  FilePlus,
  BookOpen,
  BadgeDollarSign,
  CalendarCheck,
  Upload,
  Users,
  MailCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import RegisterStudentsForm from '@/components/shared/students/register-form';



const actions = [
 
  {
    title: 'Register Students',
    description: 'Add new students to the system.',
    icon: Users,
    content: <RegisterStudentsForm />,
  },
  
];

const ActionsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    null | (typeof actions)[0]
  >(null);

  const handleClick = (action: (typeof actions)[0]) => {
    setSelectedAction(action);
    setOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {actions.map((action) => (
          <Card key={action.title} className='flex flex-col justify-between'>
            <CardHeader className='flex flex-row items-center gap-4'>
              <action.icon className='w-6 h-6 text-primary' />
              <div>
                <CardTitle className='text-lg'>{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button onClick={() => handleClick(action)} className='w-full'>
                Go to {action.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl backdrop-blur-md'>
          <DialogHeader>
            <DialogTitle>{selectedAction?.title}</DialogTitle>
            <DialogDescription>{selectedAction?.description}</DialogDescription>
          </DialogHeader>
          <div className='mt-4'>{selectedAction?.content}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ActionsPage;
