import * as fs from 'fs';

interface DataEntry {
    date: string;
    min: number;
    max: number;
    median: number;
    latestDataTimestamp: string;
}

const data: DataEntry[] = [
    {
        "date": "2023-04-28",
        "min": 60,
        "max": 119,
        "median": 81,
        "latestDataTimestamp": "2023-04-28T21:54:00"
    },
];

const jsonData = JSON.stringify(data, null, 4);

fs.writeFileSync('output.json', jsonData);

