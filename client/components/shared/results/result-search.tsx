"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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

import { Loader2, Search } from "lucide-react";

import { searchSchema } from "@/validators/studentValidation";
import { SearchForm } from "@/schemas/studentSchema";
import { levels, terms, sessions } from "@/lib/utils";

const publishStatus = ["ALL", "Published", "Unpublished"];


const ResultSearchDialog = ({
  onSearch,
  loading,
}: {
  loading: boolean;
  onSearch: (data: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, control } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      name: "",
      level: "ALL",
      session: "ALL",
      term: "ALL",
      isPublished: "ALL",
    },
  });

  const handleSearch = (data: SearchForm) => {
    onSearch({
      keyword: data.name ?? "",
      level: data.level === "ALL" ? "" : data.level,
      session: data.session === "ALL" ? "" : data.session,
      term: data.term === "ALL" ? "" : data.term,
      isPublished:
        data.isPublished === "ALL" ? "" : data.isPublished === "Published",
    });

    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 shadow-sm">
          <Search size={16} />
          Search Results
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg font-semibold">
            Search Student Results
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleSearch)} className="space-y-6 pt-2">
          {/* Student Name */}
          <div className="space-y-2">
            <Label>Student Name</Label>
            <Input
              {...register("name")}
              placeholder="e.g John Doe"
              className="focus-visible:ring-2"
            />
          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Level */}
            <div className="space-y-2">
              <Label>Class Level</Label>
              <Controller
                control={control}
                name="level"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Level" />
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

            {/* Session */}
            <div className="space-y-2">
              <Label>Session</Label>
              <Controller
                control={control}
                name="session"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Session" />
                    </SelectTrigger>

                    <SelectContent>
                      {sessions.map((session) => (
                        <SelectItem key={session} value={session}>
                          {session}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Term */}
            <div className="space-y-2 sm:col-span-2">
              <Label>Term</Label>
              <Controller
                control={control}
                name="term"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Term" />
                    </SelectTrigger>

                    <SelectContent>
                      {terms.map((term) => (
                        <SelectItem key={term} value={term}>
                          {term}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>Result Status</Label>
              <Controller
                control={control}
                name="isPublished"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>

                    <SelectContent>
                      {publishStatus.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} />
                Fetching Results...
              </>
            ) : (
              <>
                <Search size={16} />
                Search
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResultSearchDialog;
