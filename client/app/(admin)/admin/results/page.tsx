"use client";

import {
  useGetResultsDataQuery,
  useSearchResultsQuery,
} from "@/src/features/results/resultApiSlice";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ResultList from "@/components/shared/results/results-list";
import Spinner from "@/components/shared/spinner";
import Pagination from "@/components/shared/pagination";
import { useState } from "react";
import DownloadResults from "@/components/shared/results/download-results-button";
import ResultSearchDialog from "@/components/shared/results/result-search";

const AdminResultsPage = () => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    keyword: "",
    level: "",
    term: "",
    session: "",
    isPublished: "",
  });

  const { data: resultsData, isLoading: isLoadingStats } =
    useGetResultsDataQuery({});

  const { data, isLoading, isError, isFetching } = useSearchResultsQuery({
    keyword: filters.keyword,
    level: filters.level,
    term: filters.term,
    session: filters.session,
    isPublished: filters.isPublished,
    page,
  });

  const totalPages = data?.totalPages ?? 1;

  const handleSearch = (values: any) => {
    setPage(1);
    setFilters(values);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Results Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Results</CardTitle>
            <CardDescription>All uploaded results</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {isLoadingStats ? <Spinner /> : resultsData?.totalResults}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Published</CardTitle>
            <CardDescription>Visible to students</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">
            {isLoadingStats ? <Spinner /> : resultsData?.publishedResults}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Unpublished</CardTitle>
            <CardDescription>Pending publication</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-red-600">
            {isLoadingStats ? <Spinner /> : resultsData?.unpublishedResults}
          </CardContent>
        </Card>
      </div>

      {/* SEARCH */}
      <ResultSearchDialog onSearch={handleSearch} loading={isFetching} />
      

      <DownloadResults />

      <p>Total Search results <span>{ data?.totalResults}</span></p>

      {isFetching ? (
        <div className="p-6 space-y-3">
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <p className="text-center">Fetching data...</p>
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
        </div>
      ) : (
        <ResultList
          results={data?.results ?? []}
          loading={isLoading}
          error={isError}
        />
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default AdminResultsPage;
