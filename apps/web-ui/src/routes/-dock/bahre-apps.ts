export class BahreApp {
	id: string;
	name: string;
	iconsPaths: {
		svg: string;
		png: string;
	};

	constructor(name: string) {
		this.id = name.toLowerCase();
		this.name = name;
		this.iconsPaths = {
			png: `/icons/apps/${name}.png`,
			svg: `/icons/apps/${name}.svg`,
		};
	}
}

export const bahreApps: BahreApp[] = [
	new BahreApp("Budgyt"),
	new BahreApp("Countey"),
	new BahreApp("Foode"),
	new BahreApp("Sleeep"),
	new BahreApp("Xworkcise"),
	new BahreApp("Profile"),
	new BahreApp("Info"),
];
