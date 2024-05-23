import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { vendors } from "@/data/vendors";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FaRegFilePdf } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

export const Route = createFileRoute("/_protected/overview/$overview/")({
  component: Overview,
  loader: async ({ params }) => {
    return { vendor: params.overview };
  },
});

function Overview() {
  const navigate = useNavigate();
  const { vendor } = Route.useLoaderData();
  const vendorData = vendors.find(
    (vendorInfo) => vendorInfo.vendorName === vendor
  );
  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex p-2 gap-4 items-center">
        <div
          className="flex gap-2 cursor-pointer pr-4 border-r-2"
          onClick={() => navigate({ to: "/compare" })}
        >
          <TiArrowBack /> <div className="text-sm">Go Back</div>
        </div>

        <div className="flex justify-center font-bold text-xl">
          Overview of {vendorData?.vendorName}
        </div>
      </div>
      <div className="flex justify-evenly gap-20 p-2">
        <Table>
          <TableRow>
            <TableHead>Company Strength</TableHead>
            <TableCell>{vendorData?.companyStrength}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Experience in the field</TableHead>
            <TableCell>{vendorData?.fieldExp}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Commercials in USD</TableHead>
            <TableCell>{vendorData?.revUSD}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Project duration</TableHead>
            <TableCell>{vendorData?.projDuration}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Project efforts</TableHead>
            <TableCell>{vendorData?.projEfforts}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Submission date</TableHead>
            <TableCell>{vendorData?.subDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Delivery model</TableHead>
            <TableCell>{vendorData?.delModel}</TableCell>
          </TableRow>
        </Table>
        <div
          onClick={() => window.open(`${vendorData?.pdfPath}`)}
          className="flex flex-col justify-center"
        >
          <object data={`${vendorData?.pdfPath}`} type="application/pdf" />
          {vendorData && (
            <div className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer">
              <div className="text-2xl">
                <FaRegFilePdf />
              </div>
              <div>{vendorData?.vendorName}</div>
            </div>
          )}
        </div>
      </div>
      <div className="pt-8">{vendorData?.about}</div>
    </div>
  );
}
