import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface DropDownData {
  title: string;
  options: { name: string; value: string }[];
  setVal: (value: string) => void;
}

const DropDown = ({ title, options, setVal }: DropDownData) => {
  return (
    <Select onValueChange={setVal}>
      <SelectTrigger className="max-w-[31%]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt, i) => (
          <SelectItem value={opt.value} key={i}>
            {opt.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
