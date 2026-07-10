const fs = require('fs');

const filePath = 'd:/PERSONAL/EAC/preicfes/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Añadir import de Image
if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { useState } from "react"', 'import { useState } from "react"\nimport Image from "next/image"');
}

// Remover eslint disables
content = content.replace(/\/\* eslint-disable-next-line @next\/next\/no-img-element \*\/\n\s*/g, '');

// Reemplazar <img src={loc.img} alt={loc.alt} />
content = content.replace(/<img src=\{loc\.img\} alt=\{loc\.alt\} \/>/g, '<Image src={loc.img} alt={loc.alt} width={600} height={400} style={{ objectFit: "cover" }} />');

// Reemplazar <img src="..." alt="..." className="..." /> y variaciones
// Usaremos una expresión regular genérica que extraiga los props.
content = content.replace(/<img([^>]+)\/>/g, (match, props) => {
    // Si ya procesamos uno que era loc.img, saltarlo (aunque la regex de arriba ya lo hizo, pero por si acaso)
    if (props.includes('loc.img')) return match;
    
    return `<Image${props}width={800} height={800} style={{ objectFit: "contain" }} />`;
});

fs.writeFileSync(filePath, content);
console.log("Images replaced successfully in page.tsx");
