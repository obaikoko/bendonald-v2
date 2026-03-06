// 'use client';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Search } from 'lucide-react';
// import { searchSchema } from '@/validators/studentValidation';
// import { SearchForm } from '@/schemas/studentSchema';
// import { useRouter } from 'next/navigation';
// import { levels } from '@/lib/utils';
// import { useAppSelector } from '@/src/app/hooks';



// const StudentsSearch = () => {
//   const { user } = useAppSelector((state) => state.auth);

//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<SearchForm>({
//     resolver: zodResolver(searchSchema),
//     defaultValues: {
//       name: '',
//       level: 'All',
//     },
//   });

//   const handleSearch = (data: SearchForm) => {
//     const { name, level } = data;
//     if ((!name || name.trim() === '') && level === 'All') {
//       router.push(`${user.isAdmin ? '/admin/students' : '/user/students'}`);
//     } else {
//       const query = `?keyword=${encodeURIComponent(
//         name ?? ''
//       )}&level=${encodeURIComponent(level)}`;
//       router.push(
//         `${
//           user.isAdmin
//             ? `/admin/students/search${query}`
//             : `/user/students/search${query}`
//         }`
//       );
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(handleSearch)}
//       className='bg-background p-6 mt-1 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground max-w-4xl mx-auto rounded-md'
//     >
//       <div className='flex flex-col sm:flex-row items-center gap-4 w-full'>
//         <div className='relative w-full sm:flex-1'>
//           <Input
//             {...register('name')}
//             placeholder='Enter Name (First, Last, Other)'
//             className={`w-full pr-10 ${
//               errors.name ? 'border-destructive' : ''
//             }`}
//             aria-invalid={!!errors.name}
//           />
//           <Search
//             className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none'
//             size={18}
//           />
//         </div>

//         <Controller
//           control={control}
//           name='level'
//           render={({ field }) => (
//             <Select onValueChange={field.onChange} value={field.value}>
//               <SelectTrigger className='w-full sm:w-auto flex-1'>
//                 <SelectValue placeholder='Select level' />
//               </SelectTrigger>
//               <SelectContent>
//                 {levels.map((lvl: string) => (
//                   <SelectItem key={lvl} value={lvl}>
//                     {lvl}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           )}
//         />
//       </div>

//       <Button
//         type='submit'
//         className='flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer'
//       >
//         <Search size={16} />
//         Search
//       </Button>
//     </form>
//   );
// };

// export default StudentsSearch;

"use client";

import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

import { useRouter } from "next/navigation";
import { levels } from "@/lib/utils";
import { useAppSelector } from "@/src/app/hooks";

const genders = ["ALL", "Male", "Female"];
const subLevels = ["A", "B", "C", "D", "E"];

export default function StudentsSearch({
  onSearch,
  loading,
}: {
  loading: boolean;
  onSearch: (data: any) => void;
}) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  const searchSchema = z.object({
    keyword: z.string().optional(),
    studentId: z.string().optional(),
    gender: z.string().optional(),
    level: z.string().optional(),
    subLevel: z.array(z.string()).optional(),
  });

  type SearchForm = z.infer<typeof searchSchema>;

  const { register, handleSubmit, control } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keyword: "",
      studentId: "",
      gender: "ALL",
      level: "ALL",
      subLevel: [],
    },
  });

  const selectedLevel = useWatch({
    control,
    name: "level",
  });

  /*
  ========================
  SEARCH HANDLER
  ========================
  */
  const handleSearch = (data: SearchForm) => {
    onSearch({
      keyword: data.keyword ?? "",
      studentId: data.studentId ?? "",
      gender: data.gender === "ALL" ? "" : data.gender,
      level: data.level === "ALL" ? "" : data.level,
      subLevel: data.subLevel?.join(",") ?? "",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <Search size={16} />
          Search Students
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Search Students</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleSearch)} className="space-y-5 pt-2">
          {/* Keyword */}
          <div className="space-y-2">
            <Label> (Name)</Label>
            <Input
              {...register("keyword")}
              placeholder="Search by student name"
            />
          </div>

          {/* Student ID */}
          <div className="space-y-2">
            <Label>Student ID</Label>
            <Input {...register("studentId")} placeholder="Enter student ID" />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label>Gender</Label>

            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>

                  <SelectContent>
                    {genders.map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Level */}
          <div className="space-y-2">
            <Label>Class Level</Label>

            <Controller
              control={control}
              name="level"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="ALL">All</SelectItem>

                    {levels.map((lvl: string) => (
                      <SelectItem key={lvl} value={lvl}>
                        {lvl}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* SubLevel */}
          {selectedLevel !== "ALL" && (
            <div className="space-y-3">
              <Label>Class Arm (SubLevel)</Label>

              <Controller
                control={control}
                name="subLevel"
                render={({ field }) => (
                  <div className="flex flex-wrap gap-4">
                    {subLevels.map((arm) => (
                      <div key={arm} className="flex items-center gap-2">
                        <Checkbox
                          checked={field.value?.includes(arm)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...(field.value || []), arm]);
                            } else {
                              field.onChange(
                                field.value?.filter((v) => v !== arm),
                              );
                            }
                          }}
                        />
                        <Label>{arm}</Label>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full flex gap-2">
            <Search size={16} />
            Search Students
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
