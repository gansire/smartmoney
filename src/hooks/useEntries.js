import { useEffect, useState } from "react";
import { getEntries, saveEntry, deleteEntry } from "../services/Entries";

export const useEntries = (days = 7, category) => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        const loadEntries = async () => {
            const data = await getEntries(days, category);
            setEntries(data);
		}
        loadEntries();
    },[days, category]);
    
    return [entries, saveEntry, deleteEntry]
}