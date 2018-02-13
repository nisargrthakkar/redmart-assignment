/**
 * Convert First Letter of String to Caps
 * @param  {String} str  String to Convert to Title
 * @return {String} Title Case Converted String
 */

export function doFirstLetterCapital(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

/**
 * Filter Product to by Brand ,Price , Its detail and Main filter
 * @param  {Array} All Product and Filter array
 * @return {obj} optimal arry that contain with filters and products
 */

export function initProductsByFilter(products) {
  const formatedProducts = {
    byBrand: {},
    byPrice: {},
    availableFilters: {
      brand: [],
      price: []
    },
    activeFilters: {
      brand: [],
      price: []
    }
  };
  const length = products.products.length;
  for (let i = 0; i < length; i++) {
    const product = products.products[i];
    const filters = products.filters;
    product.id = i;
    for (const filter of filters) {
      if (filter) {
        const filterName = filter.name;
        if (filterName === 'price') {
          for (const priceRange of filter.values) {
            const priceRangeArray = priceRange.split('-');
            if (product.price >= priceRangeArray[0] && product.price <= priceRangeArray[1]) {
              if (!formatedProducts['byPrice'][priceRange]) {
                formatedProducts['byPrice'][priceRange] = [];
              }
              formatedProducts.byPrice[priceRange].push(product.id);
              if (formatedProducts.availableFilters.price.indexOf(priceRange) === -1) {
                formatedProducts.availableFilters.price.push(priceRange);
              }
            }
          }
        } else {
          if (!formatedProducts.byBrand[product[filterName]]) {
            formatedProducts.byBrand[product[filterName]] = [];
          }
          formatedProducts.byBrand[product[filterName]].push(product.id);
          if (formatedProducts.availableFilters.brand.indexOf(product[filterName]) === -1) {
            formatedProducts.availableFilters.brand.push(product[filterName]);
          }
        }
      }
    }
  }
  return formatedProducts;
}

/**
 * Get comman values form 2 array
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @return {Array} Contain common values or false if not
 */

export function getCommonValues(arr1, arr2) {

  if (arr1.length === 0 || !arr1) {
    return arr2 || [];
  }

  if (arr2.length === 0 || !arr2) {
    return arr1 || [];
  }

  const map = arr1.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: true
    };
  }, {});
  return arr2.filter((value) => map[value] === true);
}

/**
 * Get url param from URL
 * @param  {string}  Url search string
 * @return {Array}   array of url param or false if not
 */

export function getUrlParam(url) {
  const tempval = url.split('&');
  for (let i = 0; i < tempval.length; i++) {
    const pair = tempval[i].split('=');
    return pair[1];
  }
  return false;
}

/**
   *  Add Values in array if values is not in array
   *  @param {Array} arr  array in which we need to add value
   *  @param {string} value which we need to add in array
   *  @return {Array} arary with added values or same array if value already in array
   */

export function addValueInArray(arr, value) {
  if (!arr.includes(value)) {
    arr.push(value);
  }
  return arr;
}
