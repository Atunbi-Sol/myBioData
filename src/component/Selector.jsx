import React from "react";
import Select from "react-select";

const options = [
  { label: "Civil Servant", value: "Civil Servant" },
  { label: "Millitary", value: "Millitary" },
  { label: "Business Tycoon", value: "Business Tycoon" },
  { label: "Freelancer", value: "Freelancer" },
  { label: "Politician", value: "Politician" },
  { label: "Others", value: "Others" },
];

const CustomSelect = (props) => {
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default CustomSelect;
