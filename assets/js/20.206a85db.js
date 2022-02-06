(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(e,t,r){"use strict";r.r(t);var o=r(28),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"m-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#m-2"}},[e._v("#")]),e._v(" M.2")]),e._v(" "),r("p",[e._v("Similar to mini PCIe, we get into the fun little realm of manufacturer lock-in, specifically that your manufacturer may have a whitelist that only supports their brand of wireless cards. Do your research on your hardware to see if there's a whitelist.")]),e._v(" "),r("p",[e._v("The whitelist is as follows:")]),e._v(" "),r("ul",[r("li",[e._v("Lenovo (7th gen and older)\n"),r("ul",[r("li",[e._v("6th and 7th gen systems should have a BIOS update that remove the whitelist")])])])]),e._v(" "),r("p",[e._v("The other thing to keep in mind is that M.2 wireless cards come in 2 variants:")]),e._v(" "),r("ul",[r("li",[e._v("A Key")]),e._v(" "),r("li",[e._v("E Key")])]),e._v(" "),r("p",[e._v("Do your research to see what slot your hardware has (and don't mix up E key with mini PCIe).")]),e._v(" "),r("p",[e._v("Asus and Lenovo users should also see the "),r("RouterLink",{attrs:{to:"/misc/bluetooth.html"}},[e._v("Bluetooth")]),e._v(" section with regards to support, as 7th gen chipsets make things a bit more complicated.")],1),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.delock.de/infothek/M.2/M.2_e.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("M.2 Interface"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/jBP1D3t.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"supported-cards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-cards"}},[e._v("#")]),e._v(" Supported Cards")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("BCM94360NG")]),e._v(":\n"),r("ul",[r("li",[e._v("Fenvi BCM94360NG (A+E Key, natively supported as based off of genuine Apple Airport card) (BT 4.0)")])])]),e._v(" "),r("li",[r("strong",[e._v("BCM943602")]),e._v(":\n"),r("ul",[r("li",[e._v("Dell DW1830 (A+E Key, quite wide so make sure your laptop has room) (BT 4.1)")])])]),e._v(" "),r("li",[r("strong",[e._v("BCM94352Z")]),e._v(":\n"),r("ul",[r("li",[e._v("Fenvi AC1200 (A+E Key, natively supported as based off of a genuine Apple AirPort card) (BT 4.0)")]),e._v(" "),r("li",[e._v("Dell DW1560 (A+E Key) (BT 4.0)")]),e._v(" "),r("li",[e._v("Lenovo Lite-On WCBN802B (04X6020) (E Key) (BT 4.0)")]),e._v(" "),r("li",[e._v("AzureWave AW-CB162NF (A+E Key) (BT 4.0)")])])]),e._v(" "),r("li",[r("strong",[e._v("BCM94350ZAE")]),e._v(":\n"),r("ul",[r("li",[e._v("Lenovo Foxconn T77H649 (A+E Key) (BT 4.1)")]),e._v(" "),r("li",[e._v("Lite-On WCBN808B (A+E Key) (BT 4.1)")]),e._v(" "),r("li",[e._v("Dell DW1820A (A+E Key) (BT 4.1)")])])])]),e._v(" "),r("p",[e._v("Note: The BCM94350ZAE chipset doesn't support power management correctly in macOS so it needs to be disabled via property injection. This is "),r("strong",[e._v("not")]),e._v(" guaranteed to fix support on laptops, so "),r("strong",[e._v("do not buy this just for a laptop")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pci-aspm-default | Data | <00>\n")])])]),r("p",[e._v("To find the PciRoot, run "),r("a",{attrs:{href:"https://github.com/acidanthera/gfxutil/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("gfxutil"),r("OutboundLink")],1),e._v(" in terminal and look for "),r("code",[e._v("14e4:43a3")]),e._v("(PCI ID for the BCM94350ZAE):")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://media.discordapp.net/attachments/456913818467958789/681959522432057363/Screen_Shot_2020-02-25_at_1.23.03_PM.png?width=1674&height=895",alt:""}})]),e._v(" "),r("p",[e._v("All cards presented here "),r("strong",[e._v("besides the Fenvi and Apple AirPort cards")]),e._v(" require the following:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirportBrcmFixup"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrcmPatchRAM"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("BrcmBluetoothInjector\n"),r("ul",[r("li",[e._v("Do not use with macOS 12, use BlueToolFixup instead")]),e._v(" "),r("li",[e._v("If you dual boot both macOS 11 or under and macOS 12, "),r("code",[e._v("MinKernel")]),e._v(" and "),r("code",[e._v("MaxKernel")]),e._v(" under "),r("code",[e._v("Kernel -> Add")]),e._v(" in your config can be used to load one kext or the other in a specific OS")])])]),e._v(" "),r("li",[e._v("BrcmFirmwareData")]),e._v(" "),r("li",[e._v("BrcmPatchRAM fix:\n"),r("ul",[r("li",[e._v("BrcmPatchRAM3 for macOS 10.14+ (must be paired with BrcmBluetoothInjector unless on macOS 12)")]),e._v(" "),r("li",[e._v("BrcmPatchRAM2 for macOS 10.11-10.14")]),e._v(" "),r("li",[e._v("BrcmPatchRAM for macOS 10.10 and older")])])]),e._v(" "),r("li",[e._v("BlueToolFixup:\n"),r("ul",[r("li",[e._v("Used in place of BrcmBluetoothInjector on macOS 12")]),e._v(" "),r("li",[e._v("See above dual booting note")])])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);