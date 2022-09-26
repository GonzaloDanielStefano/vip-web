import axios from "axios";
import Cookies from "js-cookie";
import { Brand, Category, CoverageCategory, Currency, Department, Factor, FuelType, HealthFactor, HealthProduct, HomeQuoteRequest, Insurance, InsurancePeople, Model, Product, QuoteResult, RiskFactor, User, UseType, Vehicle, VehicularProduct, VehicularQuoterRequest } from "../../interfaces";
import { BuildersMethods } from "../../utils/BuildersMethods";
import {
  REACT_APP_AUTH_URL,
  REACT_APP_INSURANCE,
  REACT_APP_CURRENCY,
  REACT_APP_USE_TYPE,
  REACT_APP_FUEL_TYPE,
  REACT_APP_DEPARTMENT,
  REACT_APP_INSURANCE_TEMPLATE,
  CONFIG_MULTIPART,
  REACT_APP_PRODUCT,
  REACT_APP_CATEGORY,
  REACT_APP_FACTOR,
  REACT_APP_COVERAGE_CATEGORY,
  REACT_APP_RATE_TEMPLATE,
  REACT_APP_COVERAGE_TEMPLATE,
  REACT_APP_BRAND,
  REACT_APP_VEHICLE,
  REACT_APP_MODELS,
  REACT_APP_QUOTE,
  REACT_APP_HEALTH_FACTOR,
  REACT_APP_RISK_FACTOR,
  REACT_APP_HOME_QUOTE,
  REACT_APP_INSURANCE_PEOPLE
} from "../../utils/Constants";






/******************************************************
 *                                                    *
 *                       AUTH                         *
 *                                                    *
 ******************************************************/


export async function loginUser(userName: string, password: string) {
  const user = BuildersMethods.buildUsuario('', userName, '', password, '', '', null, '', '');

  try {
    const { data } = await axios.post<User>(REACT_APP_AUTH_URL.LOGIN, user);

    if (data !== undefined) {
      var token: string = data.token;
      var refreshToken: string = data.refreshToken;
      if (token && refreshToken) {
        Cookies.set('token', token);
        Cookies.set('refreshToken', refreshToken);
      }
    }

    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                     INSURANCES                      *
*                                                     *
******************************************************/


export async function getInsurances() {
  try {
    const { data } = await axios.get<Array<Insurance>>(REACT_APP_INSURANCE.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildInsurances(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getInsurance(id: string) {
  try {
    const { data } = await axios.get<Insurance>(REACT_APP_INSURANCE.BASE_URL + `/${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildInsurance(data.id, data.insurance_name,
        data.description, data.trade_mark, data.vehicular_products, data.health_products, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function saveInsaurance(insurance: Insurance) {
  try {
    const response = await axios.post<Insurance>(REACT_APP_INSURANCE.BASE_URL, insurance);
    if (response.status === 201) {
      return true;
    }

    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function updateInsurance(insurance: Insurance) {
  try {
    const response = await axios.put<Insurance>(REACT_APP_INSURANCE.BASE_URL + `/${insurance.id}`, insurance);
    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}






/******************************************************
*                                                     *
*                       USE TYPES                     *
*                                                     *
******************************************************/


export async function saveUseType(useType: UseType) {
  try {
    const response = await axios.post<UseType>(REACT_APP_USE_TYPE.BASE_URL, useType);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editUseType(useType: UseType) {
  try {
    const response = await axios.put<UseType>(REACT_APP_USE_TYPE.PUT + `${useType.id}`, useType);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getUseType(id: string) {
  try {
    const { data } = await axios.get<UseType>(REACT_APP_USE_TYPE.GET_BY_ID + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function deleteUseType(id: number) {
  try {
    const { data } = await axios.delete<UseType>(REACT_APP_USE_TYPE.DELETE + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getUseTypes() {
  try {
    const { data } = await axios.get<UseType[]>(REACT_APP_USE_TYPE.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildUseTypes(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}






/******************************************************
*                                                     *
*                   RISK FACTORS                      *
*                                                     *
******************************************************/


export async function getRiskFactor(id: string) {
  try {
    const { data } = await axios.get<RiskFactor>(REACT_APP_RISK_FACTOR.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildRiskFactor(data.id, data.name, data.minimum_rate,
        data.vehicles, data.rates, data.coverage, data.deductible, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editRiskFactor(factor: RiskFactor) {
  try {
    const response = await axios.put<RiskFactor>(REACT_APP_RISK_FACTOR.PUT + `${factor.id}`, factor);
    if (response.status === 200) {
      return true;
    }

    return response.data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function updateRiskFactors(factors: RiskFactor[]) {
  try {
    const response = await axios.put<RiskFactor[]>(REACT_APP_RISK_FACTOR.UPDATE_FACTORS, factors);
    if (response.status === 200) {
      return true;
    }

    return response.data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getRiskFactors() {
  try {
    const { data } = await axios.get<RiskFactor[]>(REACT_APP_RISK_FACTOR.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildRiskFactors(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function findRiskFactorsByProduct(productId) {
  try {
    const { data } = await axios.get<RiskFactor[]>(REACT_APP_RISK_FACTOR.FIND_BY_PRODUCT + `${productId}`);
    if (data !== undefined) {
      return BuildersMethods.buildRiskFactors(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                   HEALTH FACTORS                    *
*                                                     *
******************************************************/

export async function getHealthFactor(id: string) {
  try {
    const { data } = await axios.get<HealthFactor>(REACT_APP_HEALTH_FACTOR.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildHealthFactor(data.id, data.name, data.health_dependents,
        data.coverage, data.deductible, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editHealthFactor(factor: HealthFactor) {
  try {
    const response = await axios.put<HealthFactor>(REACT_APP_HEALTH_FACTOR.PUT + `${factor.id}`, factor);
    if (response.status === 200) {
      return true;
    }

    return response.data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function updateHealthactors(factors: HealthFactor[]) {
  try {
    const response = await axios.put<HealthFactor[]>(REACT_APP_HEALTH_FACTOR.UPDATE_FACTORS, factors);
    if (response.status === 200) {
      return true;
    }

    return response.data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getHealthFactors() {
  try {
    const { data } = await axios.get<HealthFactor[]>(REACT_APP_HEALTH_FACTOR.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildHealthFactors(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function findHealthFactorsByProduct(productId) {
  try {
    const { data } = await axios.get<HealthFactor[]>(REACT_APP_HEALTH_FACTOR.FIND_BY_PRODUCT + `${productId}`);
    if (data !== undefined) {
      return BuildersMethods.buildHealthFactors(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}







/******************************************************
*                                                     *
*                       CURRENCIES                    *
*                                                     *
******************************************************/


export async function saveCurrency(currency: Currency) {
  try {
    const response = await axios.post<Currency>(REACT_APP_CURRENCY.BASE_URL, currency);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editCurrency(currency: Currency) {
  try {
    const response = await axios.put<Currency>(REACT_APP_CURRENCY.PUT + `${currency.id}`, currency);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getCurrency(id: string) {
  try {
    const { data } = await axios.get<Currency>(REACT_APP_CURRENCY.GET_BY_ID + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function deleteCurrency(id: number) {
  try {
    const { data } = await axios.delete<Currency>(REACT_APP_CURRENCY.DELETE + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}


export async function getCurrencies() {
  try {
    const { data } = await axios.get<Currency[]>(REACT_APP_CURRENCY.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildCurrencies(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                 COVERAGE CATEGORIES                 *
*                                                     *
******************************************************/

export async function getCoverageCategory(id: string) {
  try {
    const { data } = await axios.get<CoverageCategory>(REACT_APP_COVERAGE_CATEGORY.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildCoverageCategory(data.id, data.name, data.created_at, data.updated_at);
    }
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editCoverageCategory(coverageCategory: CoverageCategory) {
  try {
    const response = await axios.put<CoverageCategory>(REACT_APP_COVERAGE_CATEGORY.PUT + `${coverageCategory.id}`);
    if (response.status == 200) {
      return true
    }
    return response;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getCoverageCategories() {
  try {
    const { data } = await axios.get<CoverageCategory[]>(REACT_APP_COVERAGE_CATEGORY.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildCoverageCategories(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function saveCoverageCategory(coverageCategory: CoverageCategory) {
  try {
    const response = await axios.post<CoverageCategory>(REACT_APP_COVERAGE_CATEGORY.BASE_URL, coverageCategory);
    if (response.status == 201) {
      return true;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                     FUEL TYPES                      *
*                                                     *
******************************************************/


export async function saveFuelType(fuelType: FuelType) {
  try {
    const response = await axios.post<FuelType>(REACT_APP_FUEL_TYPE.BASE_URL, fuelType);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editFuelType(fuelType: FuelType) {
  try {
    const response = await axios.put<FuelType>(REACT_APP_FUEL_TYPE.PUT + `${fuelType.id}`, fuelType);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getFuelType(id: string) {
  try {
    const { data } = await axios.get<FuelType>(REACT_APP_FUEL_TYPE.GET_BY_ID + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getFuelTypes() {
  try {
    const { data } = await axios.get<FuelType[]>(REACT_APP_FUEL_TYPE.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildFuelTypes(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                     DEPARTMENTS                     *
*                                                     *
******************************************************/


export async function saveDepartmen(department: Department) {
  try {
    const response = await axios.post<Department>(REACT_APP_DEPARTMENT.BASE_URL, department);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editDepartment(department: Department) {
  try {
    const response = await axios.put<Department>(REACT_APP_DEPARTMENT.PUT + `${department.id}`, department);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getDepartment(id: string) {
  try {
    const { data } = await axios.get<Department>(REACT_APP_DEPARTMENT.GET_BY_ID + `${id}`);
    return data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}
export async function deleteDepartment(id: number) {
  try {
    const { data } = await axios.delete(REACT_APP_DEPARTMENT.DELETE + `${id}`);
    if (data.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getDepartments() {
  try {
    const { data } = await axios.get<Department[]>(REACT_APP_DEPARTMENT.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildDepartments(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                     PRODUCTS                        *
*                                                     *
******************************************************/


export async function getProduct(id: string) {
  try {
    const { data } = await axios.get<Product>(REACT_APP_PRODUCT.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      if ("risk_factors" in data) {
        let vehicularProduct = data as VehicularProduct
        return BuildersMethods.buildVehicularProduct(vehicularProduct.id, vehicularProduct.name,
          vehicularProduct.category, vehicularProduct.product_priority, vehicularProduct.department,
          vehicularProduct.currency, vehicularProduct.use_type, vehicularProduct.fuel_type, vehicularProduct.funding,
          vehicularProduct.risk_factors, vehicularProduct.benefits, vehicularProduct.promotions, vehicularProduct.created_at, vehicularProduct.updated_at);
      } else {
        let healthproduct = data as HealthProduct
        return BuildersMethods.buildHealthProduct(healthproduct.id, healthproduct.name, healthproduct.department,
          healthproduct.category, healthproduct.product_priority, healthproduct.currency, healthproduct.funding,
          healthproduct.clinics, healthproduct.health_factors, healthproduct.benefits, healthproduct.promotions, healthproduct.created_at, healthproduct.updated_at);
      }
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getProducts() {
  try {
    const { data } = await axios.get<Product[]>(REACT_APP_PRODUCT.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildProducts(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function updateProduct(product: Product) {
  try {
    const response = await axios.put<Product>(REACT_APP_PRODUCT.PUT + `${product.id}`, product);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*               CATEGORIES OF PRODUCTS                *
*                                                     *
******************************************************/


export async function getCategory(id: string) {
  try {
    const { data } = await axios.get<Category>(REACT_APP_CATEGORY.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildCategory(data.id, data.name, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getCategories() {
  try {
    const { data } = await axios.get<Category[]>(REACT_APP_CATEGORY.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildCategories(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}


/******************************************************
*                                                     *
*                     MODELS                          *
*                                                     *
******************************************************/
export async function getModels() {
  try {
    const { data } = await axios.get<Model[]>(REACT_APP_MODELS.GET_ALL_MODELS);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}


export async function saveModel(model: Model) {
  try {
    const response = await axios.post<Model>(REACT_APP_MODELS.BASE_URL, model);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}


export async function deleteModel(id: number) {
  try {
    const { data } = await axios.delete(REACT_APP_MODELS.DELETE + `${id}`);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editModel(model: Model) {
  try {
    const response = await axios.put<Model>(REACT_APP_MODELS.PUT + `${model.id}`, model);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getModelById(id: number) {
  try {
    const { data } = await axios.get<Model>(REACT_APP_MODELS.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildModel(data.id, data.model_name, data.sub_model, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

/******************************************************
*                                                     *
*                     TEMPLATE SERVICE                *
*                                                     *
******************************************************/


export async function getInsuranceTemplate() {
  try {
    const { data } = await axios.get(REACT_APP_INSURANCE_TEMPLATE.GET_TEMPLATE, { responseType: 'blob' });
    if (data !== undefined) {
      return new File([data], 'Template Aseguradora.xlsx');
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}





/******************************************************
*                                                     *
*                      BRANDS                         *
*                                                     *
******************************************************/

export async function saveBrand(brand: Brand) {
  try {
    const response = await axios.post<Brand>(REACT_APP_BRAND.BASE_URL, brand);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}
export async function getBrands() {
  try {
    const { data } = await axios.get<Array<Brand>>(REACT_APP_BRAND.GET_ALL_BRANDS);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function deleteBrand(id: number) {
  try {
    const { data } = await axios.delete(REACT_APP_BRAND.DELETE + `${id}`);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function editBrand(brand: Brand) {
  try {
    const response = await axios.put<Brand>(REACT_APP_BRAND.PUT + `${brand.id}`, brand);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getBrandById(id: number) {
  try {
    const { data } = await axios.get<Brand>(REACT_APP_BRAND.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildBrand(data.id, data.brand_name, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

/******************************************************
*                                                     *
*                     PERSONAL INSURANCE              *
*                                                     *
******************************************************/

export async function saveInsaurancePeople(insurancePeople: InsurancePeople) {
  try {
    const response = await axios.post<InsurancePeople>(REACT_APP_INSURANCE_PEOPLE.BASE_URL, insurancePeople);
    if (response.status === 201) {
      return true;
    }

    return response.data;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getInsurancesPeople() {
  try {
    const { data } = await axios.get<Array<InsurancePeople>>(REACT_APP_INSURANCE_PEOPLE.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildInsurancesPeople(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getInsurancePeople(slug: string) {
  try {
    const { data } = await axios.get<InsurancePeople>(REACT_APP_INSURANCE_PEOPLE.BASE_URL + `/slug/${slug}`);
    
    if (data !== undefined) {
      return BuildersMethods.buildInsurancePeople(data.id, data.name, data.title, data.slug,
        data.content, data.priority, data.image, data.quoter, data.seo_description,
        data.seo_keyword, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getInsurancePeopleById(id: number) {
  try {
    const { data } = await axios.get<InsurancePeople>(REACT_APP_INSURANCE_PEOPLE.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildInsurancePeople(1, data.name, data.title, data.slug,
        data.content, 1, data.image, data.quoter, data.seo_description,
        data.seo_keyword, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}
/******************************************************
*                                                     *
*                       HOMEQUOTE                     *
*                                                     *
******************************************************/
export async function saveHomeQuote(quoteData: HomeQuoteRequest) {
  try {
    const response = await axios.post<HomeQuoteRequest>(REACT_APP_HOME_QUOTE.BASE_URL, quoteData);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}


/******************************************************
*                                                     *
*                       VEHICLES                      *
*                                                     *
******************************************************/


export async function getVehicles() {
  try {
    const { data } = await axios.get<Vehicle[]>(REACT_APP_VEHICLE.GET_ALL);
    if (data !== undefined) {
      return BuildersMethods.buildVehicles(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getVehiclesByBrand(id: number) {
  try {
    const { data } = await axios.get<Array<Vehicle>>(REACT_APP_VEHICLE.GET_BYBRAND + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildVehicles(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function getVehicle(id: string) {
  try {
    const { data } = await axios.get<Vehicle>(REACT_APP_VEHICLE.GET_BY_ID + `${id}`);
    if (data !== undefined) {
      return BuildersMethods.buildVehicle(data.id, data.brand,
        data.model, data.mandatory_gps, data.quote_data,
        data.plate, data.created_at, data.updated_at);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function updateVehicle(vehicle: Vehicle) {
  try {
    const response = await axios.put<Vehicle>(REACT_APP_VEHICLE.PUT + `${vehicle.id}`, vehicle);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}

export async function cotizarVehicle(quoter: VehicularQuoterRequest) {
  try {
    console.log(quoter);
    const { data } = await axios.post<QuoteResult[]>(REACT_APP_QUOTE.BASE_URL, quoter);

    if (data !== undefined) {
      console.log(data);
      
      return BuildersMethods.buildQuoteResults(data);
    }
  } catch (error) {
    return BuildersMethods.buildError(error);
  }
}