const LOCAL = 'https://seguros-vip-be.herokuapp.com';
//const LOCAL = 'http://localhost:8080';

export const AUTH = {
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    TOKEN: 'TOKEN',
    NAME: 'NAME',
    PASSWORD: 'PASSWORD',
    ROLES: 'ROLES'
}


export const REACT_APP_AUTH_URL = {
    BASE_URL: LOCAL + '/auth',
    LOGIN: LOCAL + '/auth/signin',
    REFRESH_TOKEN: LOCAL + '/auth/refreshtoken'
}

export const MESSAGES = {
    ACCESS_DENIED: 'Access is denied.'
}

export const HTTP_STATUS = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

export const REACT_APP_API_URL = {
    BASE_URL: LOCAL
}

export const REACT_APP_INSURANCE = {
    BASE_URL: LOCAL + '/insurance',
    GET_ALL: LOCAL + '/insurances'
}

export const REACT_APP_PRODUCT = {
    BASE_URL: LOCAL + '/product',
    GET_BY_ID: LOCAL + '/product/',
    PUT: LOCAL + '/product/',
    GET_ALL: LOCAL + '/products'
}

export const REACT_APP_FACTOR = {
    BASE_URL: LOCAL + '/factor',
    GET_BY_ID: LOCAL + '/factor/',
    PUT: LOCAL + '/factor/',
    UPDATE_FACTORS: LOCAL + '/factors/update_factors',
    GET_ALL: LOCAL + '/factors',
    FIND_BY_PRODUCT: LOCAL + '/factors/by_product/'
}

export const REACT_APP_RATE = {
    BASE_URL: LOCAL + '/rate',
    GET_BY_ID: LOCAL + '/rate/',
    PUT: LOCAL + '/rate/',
    GET_ALL: LOCAL + '/rates'
}

export const REACT_APP_HEALTH_FACTOR = {
    BASE_URL: LOCAL + '/health_factor',
    GET_BY_ID: LOCAL + '/health_factor/',
    PUT: LOCAL + '/health_factor/',
    UPDATE_FACTORS: LOCAL + '/health_factor/update_health_factors',
    DELETE: LOCAL + '/health_factor/',
    GET_ALL: LOCAL + '/health_factors',
    FIND_BY_PRODUCT: LOCAL + '/factors/by_product/'
}

export const REACT_APP_RISK_FACTOR = {
    BASE_URL: LOCAL + '/risk_factor',
    GET_BY_ID: LOCAL + '/risk_factor/',
    PUT: LOCAL + '/risk_factor/',
    UPDATE_FACTORS: LOCAL + '/risk_factor/update_risk_factors',
    DELETE: LOCAL + '/risk_factor/',
    GET_ALL: LOCAL + '/risk_factors',
    FIND_BY_PRODUCT: LOCAL + '/risk_factors/by_product/'
}

export const REACT_APP_VEHICULAR_PRODUCT = {
    BASE_URL: LOCAL + '/vehicularProduct',
    PUT: LOCAL + '/update_vehicular_product/',
}

export const REACT_APP_HEALTH_PRODUCT = {
    BASE_URL: LOCAL + '/healthProduct',
    PUT: LOCAL + '/update_health_product/'
}

export const REACT_APP_CATEGORY = {
    BASE_URL: LOCAL + '/category',
    GET_BY_ID: LOCAL + '/category/',
    PUT: LOCAL + '/category/',
    GET_ALL: LOCAL + '/categories'
}

export const REACT_APP_DEPARTMENT = {
    BASE_URL: LOCAL + '/department',
    GET_BY_ID: LOCAL + '/department/',
    DELETE: LOCAL + '/department/',
    PUT: LOCAL + '/department/',
    GET_ALL: LOCAL + '/departments'
}

export const REACT_APP_CURRENCY = {
    BASE_URL: LOCAL + '/currency',
    GET_BY_ID: LOCAL + '/currency/',
    PUT: LOCAL + '/currency/',
    DELETE: LOCAL + '/currency/',
    GET_ALL: LOCAL + '/currencies'
}

export const REACT_APP_FUEL_TYPE = {
    BASE_URL: LOCAL + '/fuel_type',
    GET_BY_ID: LOCAL + '/fuel_type/',
    PUT: LOCAL + '/fuel_type/',
    GET_ALL: LOCAL + '/fuel_types'
}

export const REACT_APP_VEHICLE = {
    BASE_URL: LOCAL + '/vehicle',
    GET_BY_ID: LOCAL + '/vehicle/',
    PUT: LOCAL + '/vehicle/',
    GET_ALL: LOCAL + '/vehicles',
    GET_BYBRAND: LOCAL + '/vehicle/brand/'
}

export const REACT_APP_COVERAGE_CATEGORY = {
    BASE_URL: LOCAL + '/coverage_category',
    GET_BY_ID: LOCAL + '/coverage_category/',
    PUT: LOCAL + '/coverage_category/',
    GET_ALL: LOCAL + '/coverage_categories'
}

export const REACT_APP_BRAND = {
    BASE_URL: LOCAL + '/brand',
    GET_BY_ID: LOCAL + '/brand/',
    DELETE: LOCAL + '/brand/',
    PUT: LOCAL + '/brand/',
    GET_BY_NAME: LOCAL + '/brand/by_name/',
    GET_ALL_BRANDS: LOCAL + '/brands',
}

export const REACT_APP_MODELS = {
    BASE_URL: LOCAL + '/model',
    GET_BY_ID: LOCAL + '/models/',
    DELETE: LOCAL + '/models/',
    PUT: LOCAL + '/models/',
    GET_BY_NAME: LOCAL + '/models/by_name/',
    GET_ALL_MODELS: LOCAL + '/models',
}

export const REACT_APP_USE_TYPE = {
    BASE_URL: LOCAL + '/use_type',
    GET_BY_ID: LOCAL + '/use_type/',
    DELETE: LOCAL + '/use_type/',
    PUT: LOCAL + '/use_type/',
    GET_ALL: LOCAL + '/use_types'
}

export const REACT_APP_QUOTE = {
    BASE_URL: LOCAL + '/quote_vehicle'
}

export const REACT_APP_INSURANCE_TEMPLATE = {
    POST_TEMPLATE: LOCAL + '/insurance/create_by_template',
    GET_TEMPLATE: LOCAL + '/insurance/template'
}

export const REACT_APP_RATE_TEMPLATE = {
    POST_TEMPLATE: LOCAL + '/rates/create_by_template/',
    GET_TEMPLATE: LOCAL + '/rates/template/'
}

export const REACT_APP_COVERAGE_TEMPLATE = {
    POST_TEMPLATE: LOCAL + '/coverages/create_by_template/',
    GET_TEMPLATE: LOCAL + '/coverages/template/'
}

export const CONFIG_MULTIPART = {
    headers: { "Content-Type": "multipart/form-data" }
}