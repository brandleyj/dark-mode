import { useLocalStorage } from "./UseLocalStorage";

export default function useDarkMode() {
	const [dark, setDark] = useLocalStorage("");
}
