import { FaScaleUnbalancedFlip, FaMedal } from "react-icons/fa6";
import { IoCodeWorkingSharp, IoLocationOutline } from "react-icons/io5";
import { BsCashCoin, BsCalendar2Date } from "react-icons/bs";
import { LuClock2 } from "react-icons/lu";
import { GoStack } from "react-icons/go";
import { RiMailSendLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { ToggleGroup } from "./ui/toggle-group";
import { useDispatch, useSelector } from "react-redux";
import { fieldSelector, setFields } from "@/redux/features/fields/fieldSlice";
import { Toggle } from "./ui/toggle";

const toggleMap = {
  "Company Strength": "companyStrength",
  Experience: "fieldExp",
  "Commercials (USD)": "revUSD",
  "Project Duration": "projDuration",
  "Project Efforts": "projEfforts",
  "Submission Date": "subDate",
  "Delivery Model": "delModel",
  "Employee Count": "empCount",
  Rating: "rating",
  "Company Info": "about",
  Milestone: "milestone",
  Location: "location",
};

export const FieldsSelector = () => {
  const dispatch = useDispatch();
  const fields = useSelector(fieldSelector);

  const handleToggle = (value: string) => {
    const fieldKey = toggleMap[value];
    if (fieldKey) {
      dispatch(setFields({ [fieldKey]: !fields[fieldKey] }));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <ToggleGroup type="single" className="p-1 gap-2">
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Company Strength"
          onClick={() => handleToggle("Company Strength")}
          pressed={fields.companyStrength}
        >
          <FaScaleUnbalancedFlip />
          Company Strength
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Experience"
          onClick={() => handleToggle("Experience")}
          pressed={fields.fieldExp}
        >
          <IoCodeWorkingSharp />
          Experience
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Commercials (USD)"
          onClick={() => handleToggle("Commercials (USD)")}
          pressed={fields.revUSD}
        >
          <BsCashCoin />
          Commercials (USD)
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Project Duration"
          onClick={() => handleToggle("Project Duration")}
          pressed={fields.projDuration}
        >
          <LuClock2 />
          Project Duration
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Project Efforts"
          onClick={() => handleToggle("Project Efforts")}
          pressed={fields.projEfforts}
        >
          <GoStack />
          Project Efforts
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Submission Date"
          onClick={() => handleToggle("Submission Date")}
          pressed={fields.subDate}
        >
          <BsCalendar2Date />
          Submission Date
        </Toggle>
      </ToggleGroup>
      <ToggleGroup type="single" className="p-1 gap-2">
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Delivery Model"
          onClick={() => handleToggle("Delivery Model")}
          pressed={fields.delModel}
        >
          <RiMailSendLine />
          Delivery Model
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Employee Count"
          onClick={() => handleToggle("Employee Count")}
          pressed={fields.empCount}
        >
          <IoIosPeople />
          Employee Count
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Rating"
          onClick={() => handleToggle("Rating")}
          pressed={fields.rating}
        >
          <HiOutlineStar />
          Rating
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Company Info"
          onClick={() => handleToggle("Company Info")}
          pressed={fields.about}
        >
          <ImStatsBars />
          Company Info
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Milestone"
          onClick={() => handleToggle("Milestone")}
          pressed={fields.milestone}
        >
          <FaMedal />
          Milestone
        </Toggle>
        <Toggle
          className="flex justify-evenly gap-1 data-[state=on]:text-[#5B5FC7] dark:data-[state=on]:text-purple-400"
          variant={"outline"}
          value="Location"
          onClick={() => handleToggle("Location")}
          pressed={fields.location}
        >
          <IoLocationOutline />
          Location
        </Toggle>
      </ToggleGroup>
    </div>
  );
};
