"use client";

import {
  useSearchStudentsQuery,
} from "@/src/features/students/studentApiSlice";
import { useGetStudentsDataQuery } from "@/src/features/data/dataApiSlice";
import StudentsSearch from "@/components/shared/students/student-search";
import StudentsTable from "@/components/shared/students/students-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DownloadStudentDataButton from "@/components/shared/students/download-student-button";
import GraduateStudentsButton from "@/components/shared/students/graduate-students-button";
import Pagination from "@/components/shared/pagination";
import { useState } from "react";

const StudentsPage = () => {
  const [page, setPage] = useState<number>(1);

  const [filters, setFilters] = useState({
    keyword: "",
    level: "",
    subLevel: "",
    studentId: "",
    gender: "",
  });

 

  const { data, isLoading, isError, isFetching } = useSearchStudentsQuery({
    page,
    ...filters,
  });
  const { data: studentsData } = useGetStudentsDataQuery({});
  const totalPages = data?.totalPages ?? 1;

  const handleSearch = (values: any) => {
    setPage(1);
    setFilters(values);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Students Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Students</CardTitle>
            <CardDescription>All registered students</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {isLoading ? "Loading..." : studentsData?.totalStudents}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Male Students</CardTitle>
            <CardDescription>Number of boys</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-blue-600">
            {isLoading ? "Loading..." : studentsData?.Male}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Female Students</CardTitle>
            <CardDescription>Number of girls</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-pink-600">
            {isLoading ? "Loading..." : studentsData?.Female}
          </CardContent>
        </Card>
      </div>

      <StudentsSearch onSearch={handleSearch} loading={isFetching} />

      {isFetching ? (
        <div className="p-6 space-y-3">
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <p className="text-center">Fetching data...</p>
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <StudentsTable
            students={data?.students ?? []}
            isLoading={isLoading}
              isError={isError}
              
          />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Important Buttons</CardTitle>
          <CardDescription className="text-destructive">
            Note that this buttons here are marked as important button.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-3">
            <DownloadStudentDataButton />
            <GraduateStudentsButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsPage;
