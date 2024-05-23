import { useState } from "react";
import { vendors } from "@/data/vendors";
import { createFileRoute } from "@tanstack/react-router";
import { FaRegFilePdf } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_protected/compare/")({
  component: Compare,
});

function Compare() {
  const [selectedVendors, setSelectedVendors] = useState({
    vendor1: "",
    vendor2: "",
    vendor3: "",
  });

  const handleSelect = (vendorKey: string, vendorName: string) => {
    setSelectedVendors((prev) => ({ ...prev, [vendorKey]: vendorName }));
  };

  const getVendorDetails = (vendorName: string) => {
    return vendors.find((vendor) => vendor.vendorName === vendorName);
  };

  const vendor1Details = getVendorDetails(selectedVendors.vendor1);
  const vendor2Details = getVendorDetails(selectedVendors.vendor2);
  const vendor3Details = getVendorDetails(selectedVendors.vendor3);

  return (
    <div className="container p-10 pt-5">
      <div className="py-5">
        <TableHead className="text-2xl">COMPARE</TableHead>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendor Name</TableHead>
            <TableCell>
              <Select onValueChange={(value) => handleSelect("vendor1", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="-- Select Vendor --" />
                </SelectTrigger>
                <SelectContent>
                  {vendors.map((vendor) => (
                    <SelectItem
                      key={vendor.vendorName}
                      value={vendor.vendorName}
                    >
                      {vendor.vendorName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Select onValueChange={(value) => handleSelect("vendor2", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="-- Select Vendor --" />
                </SelectTrigger>
                <SelectContent>
                  {vendors.map((vendor) => (
                    <SelectItem
                      key={vendor.vendorName}
                      value={vendor.vendorName}
                    >
                      {vendor.vendorName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Select onValueChange={(value) => handleSelect("vendor3", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="-- Select Vendor --" />
                </SelectTrigger>
                <SelectContent>
                  {vendors.map((vendor) => (
                    <SelectItem
                      key={vendor.vendorName}
                      value={vendor.vendorName}
                    >
                      {vendor.vendorName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead></TableHead>
            <TableCell>
              <div className="flex flex-col items-center justify-center min-h-[20vh]">
                {vendor1Details ? (
                  <div>
                    <object
                      data={`${vendor1Details?.pdfPath}`}
                      type="application/pdf"
                    />
                    {vendor1Details && (
                      <div
                        className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          window.open(`${vendor1Details?.pdfPath}`);
                        }}
                      >
                        <div className="text-2xl">
                          <FaRegFilePdf />
                        </div>
                        <div>{vendor1Details?.vendorName}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-center justify-center min-h-[20vh]">
                {vendor2Details ? (
                  <div>
                    <object
                      data={`${vendor2Details?.pdfPath}`}
                      type="application/pdf"
                    />
                    {vendor2Details && (
                      <div
                        className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          window.open(`${vendor2Details?.pdfPath}`);
                        }}
                      >
                        <div className="text-2xl">
                          <FaRegFilePdf />
                        </div>
                        <div>{vendor2Details?.vendorName}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-center justify-center min-h-[20vh]">
                {vendor3Details ? (
                  <div>
                    <object
                      data={`${vendor3Details?.pdfPath}`}
                      type="application/pdf"
                    />
                    {vendor3Details && (
                      <div
                        className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer"
                        onClick={() =>
                          window.open(`${vendor3Details?.pdfPath}`)
                        }
                      >
                        <div className="text-2xl">
                          <FaRegFilePdf />
                        </div>
                        <div>{vendor3Details?.vendorName}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Company Strength</TableHead>
            <TableCell>{vendor1Details?.companyStrength || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.companyStrength || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.companyStrength || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Experience in the Field</TableHead>
            <TableCell>{vendor1Details?.fieldExp || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.fieldExp || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.fieldExp || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Commercials in USD</TableHead>
            <TableCell>{vendor1Details?.revUSD || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.revUSD || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.revUSD || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Project Duration</TableHead>
            <TableCell>{vendor1Details?.projDuration || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.projDuration || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.projDuration || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Project Efforts</TableHead>
            <TableCell>{vendor1Details?.projEfforts || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.projEfforts || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.projEfforts || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Submission Date</TableHead>
            <TableCell>{vendor1Details?.subDate || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.subDate || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.subDate || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>Delivery Model</TableHead>
            <TableCell>{vendor1Details?.delModel || "N/A"}</TableCell>
            <TableCell>{vendor2Details?.delModel || "N/A"}</TableCell>
            <TableCell>{vendor3Details?.delModel || "N/A"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
