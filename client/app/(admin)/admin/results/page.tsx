"use client";

import {
  useGetResultsDataQuery,
  useGetResultsQuery,
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
import ResultSearch from "@/components/shared/results/result-search";

const AdminResultsPage = () => {
  const [page, setPage] = useState<number>(1);

  // Summary stats
  const {
    data: resultsData,
    isLoading: isLoadingStats,
    isError: statsError,
  } = useGetResultsDataQuery({});

  // Paginated results
  const {
    data: results,
    isLoading: loadingResults,
    isError: resultsError,
  } = useGetResultsQuery(page);

  const totalPages = results?.totalPages ?? 1;

  /** -------------------------------
   * HANDLE GLOBAL / CRITICAL ERRORS
   -------------------------------- */
  if (statsError) {
    return (
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Error Loading Summary Stats</CardTitle>
          <CardDescription>
            Could not load results overview. Please try again.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Results Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total */}
        <Card>
          <CardHeader>
            <CardTitle>Total Results</CardTitle>
            <CardDescription>All uploaded results</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            {isLoadingStats ? <Spinner /> : resultsData?.totalResults}
          </CardContent>
        </Card>

        {/* Published */}
        <Card>
          <CardHeader>
            <CardTitle>Published</CardTitle>
            <CardDescription>Visible to students</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">
            {isLoadingStats ? <Spinner /> : resultsData?.publishedResults}
          </CardContent>
        </Card>

        {/* Unpublished */}
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

      <ResultSearch />

      <DownloadResults />

      {/* Results table */}
      <ResultList
        results={results?.results ?? []}
        loading={loadingResults}
        error={resultsError}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default AdminResultsPage;
