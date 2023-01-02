const hotkeyCheatsheet = {
    module: async (api) => {
        const mod = await api.registerModule(
            'hotkeyCheatsheet',
            'Collapsible Bloodhound Pane',
            'global',
            'Adds a cheatsheet for hotkeys on the left side of the screen.',
        );
		
		const hotkeyCheatsheet = () => {
			const content = document.querySelector('div.content');
			const div = content.appendChild(document.createElement('div'));
			div.inert = true;
			div.style.position = 'fixed';
			div.style.left = '30px';
			div.style.top = '150px';
			div.style.fontSize = '12px';
			
			// Yes this is heinous, sorry
			div.innerHTML = `
<br><b>A</b> to Attack your currently selected player-character target.<br>
<br><b>P</b> to attack the currently selected Pet.<br>
<br><b>K</b> to use AoE attack (Nexus Tweaks: Class-Specific Tweaks).<br>
<br><b>G</b> to attack a Glyph.<br>
<br><b>W</b> to attack wards or doors.<br>
<br><b>O</b> to bash or build fortifications<br>
<br><b>L</b> to retrieve or capture stronghold flags<br>
<br><b>C</b> to fly (Nexus Tweaks: Spread Your Wings)<br>
<br><b>B</b> to enter and exit a building. B will also open the door from<br>
&emsp;outside if a closed (but not locked) door is a barrier to entry.<br>
<br><b>S</b> to Search.<br>
<br><b>H</b> to Hide.<br>
<br><b>X</b> to heal the current dropdown target.<br>
&emsp;Where multiple methods are available, the priorities run<br>
&emsp;Surgery -> Healing Herbs -> Bone Leeches -> First Aid Kits.<br>
<br><b>R</b> to pick up (Retrieve) items on the ground.<br>
<br><b>J</b> to sabotage or repair power. Inside a Power Plant, this<br>
&emsp;applies to repairing or sabotaging generators.<br>
<br><b>M</b> to toggle the Interface to the Map.<br>
<br><b>I</b> to toggle the Interface to the Inventory.<br>
<br><b>T</b> to shoot targets.<br>
			`;
		}
        
        await mod.registerMethod('sync', hotkeyCheatsheet);
	}
}