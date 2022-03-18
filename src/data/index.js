export const biosynthetic_classes = [
    'NRP',
    'Polyketide',
    'Terpene',
    'Saccharide',
    'RiPP',
    'Other',
];

export const compound = {
    activities: [
        'antibacterial',
        'anticancer',
        'antifungal',
        'antimalarial',
        'immunosuppressant',
    ],
    databases: [
        'pubchem',
        'npatlas',
        'chemspider',
    ],
    evidence: [
        "Chemical derivatization",
        "Total synthesis",
        "Mass spectrometry",
        "X-ray",
        "NMR",
    ],
    fake_names: [
        "bactobolin",
        "barbamide",
        "bleomycin",
        "funisamine",
        "chloromyxamide",
        "kirromycin",
        "malyngamide I",
        "toxoflavin",
        "fervenulin",

    ],
};

export const locus = {
    completeness: [
        'complete',
        'incomplete',
        'unknown',
    ],
    databases: [
        'NCBI',
        'MIBIG',
    ],
    evidence: [
        "sequence-based prediction",
        "gene expression correlated with compound production",
        "knock-out studies",
        "enzymatic assays",
        "heterologous expression",
    ],
};

export const publications = {
    databases: [
        'PubMed',
        'PMC',
        'DOI',
        'URL',
        'patent',
    ],
}

export default { biosynthetic_classes: biosynthetic_classes, compound: compound, locus: locus, publications: publications };