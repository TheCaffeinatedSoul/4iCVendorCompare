import { useState } from "react";
import { vendors } from "@/data/vendors";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
import { FieldsSelector } from "@/components/fields-selector";
import { useSelector } from "react-redux";
import { fieldSelector } from "@/redux/features/fields/fieldSlice";
import { IoOpenOutline, IoClose } from "react-icons/io5";

export const Route = createFileRoute("/_protected/compare/")({
  component: Compare,
});

function Compare() {
  const navigate = useNavigate();

  const fields = useSelector(fieldSelector);

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
        <TableHead className="text-2xl pb-4">COMPARE</TableHead>
        <FieldsSelector />
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
                  <div className="flex flex-col w-full items-center gap-2">
                    <div className="flex w-full items-center justify-evenly gap-2">
                      <img
                        src={vendor1Details?.logoPath}
                        alt="logo"
                        width={"50vw"}
                      />
                      {vendor1Details?.vendorName}
                      <IoClose
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedVendors((prev) => ({
                            ...prev,
                            vendor1: "",
                          }));
                        }}
                      />
                    </div>
                    <div
                      className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer rounded-lg"
                      onClick={() => {
                        navigate({
                          to: `/overview/${vendor1Details?.vendorName}`,
                        });
                      }}
                    >
                      <div>Show proposal </div>
                      <div className="text-lg">
                        <IoOpenOutline />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-center justify-center min-h-[20vh]">
                {vendor2Details ? (
                  <div className="flex flex-col w-full items-center gap-2">
                    <div className="flex w-full items-center justify-evenly gap-2">
                      <img
                        src={vendor2Details?.logoPath}
                        alt="logo"
                        width={"50vw"}
                      />
                      {vendor2Details?.vendorName}
                      <IoClose
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedVendors((prev) => ({
                            ...prev,
                            vendor2: "",
                          }));
                        }}
                      />
                    </div>
                    <div
                      className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer rounded-lg"
                      onClick={() => {
                        navigate({
                          to: `/overview/${vendor2Details?.vendorName}`,
                        });
                      }}
                    >
                      <div>Show proposal</div>
                      <div className="text-lg">
                        <IoOpenOutline />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-center justify-center min-h-[20vh]">
                {vendor3Details ? (
                  <div className="flex flex-col w-full items-center gap-2">
                    <div className="flex w-full items-center justify-evenly gap-2">
                      <img
                        src={vendor3Details?.logoPath}
                        alt="logo"
                        width={"50vw"}
                      />
                      {vendor3Details?.vendorName}
                      <IoClose
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedVendors((prev) => ({
                            ...prev,
                            vendor3: "",
                          }));
                        }}
                      />
                    </div>
                    <div
                      className="flex w-full justify-evenly items-center bg-secondary p-2 hover:text-blue-500 cursor-pointer rounded-lg"
                      onClick={() =>
                        navigate({
                          to: `/overview/${vendor3Details?.vendorName}`,
                        })
                      }
                    >
                      <div>Show proposal</div>
                      <div className="text-lg">
                        <IoOpenOutline />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl">N/A</div>
                )}
              </div>
            </TableCell>
          </TableRow>
          {fields.companyStrength && (
            <TableRow>
              <TableHead>Company Strength</TableHead>
              <TableCell>{vendor1Details?.companyStrength || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.companyStrength || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.companyStrength || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.fieldExp && (
            <TableRow>
              <TableHead>Experience in the Field</TableHead>
              <TableCell>{vendor1Details?.fieldExp || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.fieldExp || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.fieldExp || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.revUSD && (
            <TableRow>
              <TableHead>Commercials in USD</TableHead>
              <TableCell>{vendor1Details?.revUSD || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.revUSD || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.revUSD || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.projDuration && (
            <TableRow>
              <TableHead>Project Duration</TableHead>
              <TableCell>{vendor1Details?.projDuration || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.projDuration || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.projDuration || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.projEfforts && (
            <TableRow>
              <TableHead>Project Efforts</TableHead>
              <TableCell>{vendor1Details?.projEfforts || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.projEfforts || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.projEfforts || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.subDate && (
            <TableRow>
              <TableHead>Submission Date</TableHead>
              <TableCell>{vendor1Details?.subDate || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.subDate || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.subDate || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.delModel && (
            <TableRow>
              <TableHead>Delivery Model</TableHead>
              <TableCell>{vendor1Details?.delModel || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.delModel || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.delModel || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.rating && (
            <TableRow>
              <TableHead>Rating</TableHead>
              <TableCell>{vendor1Details?.rating || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.rating || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.rating || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.about && (
            <TableRow>
              <TableHead>Company Info</TableHead>
              <TableCell>{vendor1Details?.about || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.about || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.about || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.milestone && (
            <TableRow>
              <TableHead>Milestone</TableHead>
              <TableCell>{vendor1Details?.milestone || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.milestone || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.milestone || "N/A"}</TableCell>
            </TableRow>
          )}
          {fields.location && (
            <TableRow>
              <TableHead>Location</TableHead>
              <TableCell>{vendor1Details?.location || "N/A"}</TableCell>
              <TableCell>{vendor2Details?.location || "N/A"}</TableCell>
              <TableCell>{vendor3Details?.location || "N/A"}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
