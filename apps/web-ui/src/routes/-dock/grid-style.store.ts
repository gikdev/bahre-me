import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StorageKeys } from "#/shared/constants";

type GridStyle = "list" | "grid";

interface GridStyleStore {
	style: GridStyle;
	changeTo: (newStyle: GridStyle) => void;
	toggle: () => void;
}

export const useGridStyleStore = create<GridStyleStore>()(
	persist(
		(set, get) => ({
			style: "list",
			changeTo: (newStyle) => set(() => ({ style: newStyle })),
			toggle: () =>
				set(() => ({ style: get().style === "grid" ? "list" : "grid" })),
		}),
		{ name: StorageKeys.ZustandDockGridStyle },
	),
);
