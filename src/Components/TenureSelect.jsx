import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function TenureSelect({ data, setData }) {
    const handleChange = (event) => {
        setData({
            ...data, loanTerm: event.target.value
        });
    };
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.loanTerm}
                        label="Tenure"
                        defaultValue={5}
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5 years</MenuItem>
                        <MenuItem value={10}>10 years</MenuItem>
                        <MenuItem value={15}>15 years</MenuItem>
                        <MenuItem value={20}>20 years</MenuItem>
                        <MenuItem value={25}>25 years</MenuItem>
                    </Select>
                    Tenure
                </InputLabel>
            </FormControl >
        </>
    );
}

export default TenureSelect;