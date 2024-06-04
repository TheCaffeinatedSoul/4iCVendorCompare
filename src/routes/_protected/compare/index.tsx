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
import { Card } from "@/components/ui/card";

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
        <FieldsSelector />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendor Name</TableHead>
            <TableCell className="text-[#263238] dark:text-white">
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
            <TableCell className="text-[#263238] dark:text-white">
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
            <TableCell className="text-[#263238] dark:text-white">
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
            <TableCell className="text-[#263238] dark:text-white">
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
            <TableCell className="text-[#263238] dark:text-white">
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
            <TableCell className="text-[#263238] dark:text-white">
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
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.companyStrength || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.companyStrength || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.companyStrength || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.fieldExp && (
            <TableRow>
              <TableHead>Experience in the Field</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.fieldExp || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.fieldExp || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.fieldExp || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.revUSD && (
            <TableRow>
              <TableHead>Commercials in USD</TableHead>
              {[vendor1Details, vendor2Details, vendor3Details].map(
                (vendor, index) => {
                  const revUSD = vendor?.revUSD ? vendor.revUSD : 0;
                  const isLowest =
                    revUSD ===
                    Math.min(
                      vendor1Details?.revUSD ? vendor1Details.revUSD : 0,
                      vendor2Details?.revUSD ? vendor2Details.revUSD : 0,
                      vendor3Details?.revUSD ? vendor3Details.revUSD : 0
                    );
                  return (
                    <TableCell key={index}>
                      {isLowest ? (
                        <Card
                          className={`flex p-2 shadow-none w-fit text-[#263238] dark:text-white ${
                            isLowest
                              ? "bg-yellow-100 dark:text-black font-bold"
                              : ""
                          }`}
                        >
                          {vendor?.revUSD || "N/A"}
                        </Card>
                      ) : (
                        <div> {vendor?.revUSD || "N/A"}</div>
                      )}
                    </TableCell>
                  );
                }
              )}
            </TableRow>
          )}
          {fields.projDuration && (
            <TableRow>
              <TableHead>Project Duration</TableHead>
              {[vendor1Details, vendor2Details, vendor3Details].map(
                (vendor, index) => {
                  const projDuration = vendor?.projDuration
                    ? parseInt(vendor.projDuration.split(" ")[0])
                    : Infinity;
                  const minDuration = Math.min(
                    vendor1Details?.projDuration
                      ? parseInt(vendor1Details.projDuration.split(" ")[0])
                      : Infinity,
                    vendor2Details?.projDuration
                      ? parseInt(vendor2Details.projDuration.split(" ")[0])
                      : Infinity,
                    vendor3Details?.projDuration
                      ? parseInt(vendor3Details.projDuration.split(" ")[0])
                      : Infinity
                  );
                  const isLowest = projDuration === minDuration;

                  return (
                    <TableCell key={index}>
                      {isLowest ? (
                        <Card
                          className={`flex p-2 shadow-none w-fit text-[#263238] dark:text-white ${
                            isLowest
                              ? "bg-yellow-100 dark:text-black font-bold"
                              : ""
                          }`}
                        >
                          {vendor?.projDuration || "N/A"}
                        </Card>
                      ) : (
                        <div>{vendor?.projDuration || "N/A"}</div>
                      )}
                    </TableCell>
                  );
                }
              )}
            </TableRow>
          )}

          {fields.projEfforts && (
            <TableRow>
              <TableHead>Project Efforts</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.projEfforts || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.projEfforts || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.projEfforts || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.subDate && (
            <TableRow>
              <TableHead>Submission Date</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.subDate || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.subDate || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.subDate || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.delModel && (
            <TableRow>
              <TableHead>Delivery Model</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.delModel || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.delModel || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.delModel || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.rating && (
            <TableRow>
              <TableHead>Rating</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.rating || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.rating || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.rating || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.about && (
            <TableRow>
              <TableHead>Company Info</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.about || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.about || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.about || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.milestone && (
            <TableRow>
              <TableHead>Milestone</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.milestone || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.milestone || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.milestone || "N/A"}
              </TableCell>
            </TableRow>
          )}
          {fields.location && (
            <TableRow>
              <TableHead>Location</TableHead>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor1Details?.location || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor2Details?.location || "N/A"}
              </TableCell>
              <TableCell className="text-[#263238] dark:text-white">
                {vendor3Details?.location || "N/A"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
