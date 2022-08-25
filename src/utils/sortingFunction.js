export function sortByFilters(brandCheckboxes, typesCheckboxes, allProducts) {
    let sortedByBrand = [];
    let sortedByType = [];

    if (brandCheckboxes.length > 0 && typesCheckboxes.length < 1) {
        for (let i = 0; i < brandCheckboxes.length; i++){
            let sorted = allProducts.filter(item => item.brand === brandCheckboxes[i]);
            sortedByBrand = sortedByBrand.concat(sorted);
        }
        return [...new Set(sortedByBrand)];
    }

    if (typesCheckboxes.length > 0 && brandCheckboxes.length < 1) {
        for (let i = 0; i < typesCheckboxes.length; i++) {
            let sorted = allProducts.filter(item => item.product_type === typesCheckboxes[i]);
            sortedByType = sortedByType.concat(sorted);
        }
        return [...new Set(sortedByType)];
    }
    
    if (typesCheckboxes.length > 0 && brandCheckboxes.length > 0) {
        for (let i = 0; i < brandCheckboxes.length; i++) {
            let sorted = allProducts.filter(item => item.brand === brandCheckboxes[i]);
            sortedByBrand = sortedByBrand.concat(sorted);
        }

        for (let i = 0; i < typesCheckboxes.length; i++) {
            let sorted = sortedByBrand.filter(item => item.product_type === typesCheckboxes[i]);
            sortedByType = sorted.length > 0 ? sortedByType.concat(sorted) : sortedByBrand;
        }
        return [...new Set(sortedByType)];
    }

    return [];
}