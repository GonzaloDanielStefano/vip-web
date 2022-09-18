// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';∫

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  refreshToken: string;
  roles: [
    RoleType
  ] | null;
  created_at: string;
  updated_at: string;
}

export type RoleType = {
  name: string;
}

export type Insurance = {
  id: string | null
  insurance_name: string
  description: string
  trade_mark: string
  health_products: HealthProduct[]
  vehicular_products: VehicularProduct[]
  created_at: string | null
  updated_at: string | null
}

export type VehicularProduct = Product & {
  use_type: UseType | null
  fuel_type: FuelType | null
  risk_factors: RiskFactor[] | null
}

export type HealthProduct = Product & {
  clinics: Clinic[]
  health_factors: HealthFactor[]
}

export type HealthFactor = Factor & {
  health_dependents: HealthDependent[]
}

export type Clinic = {
  id: string | null
  name: string
  description: string
  created_at: string | null
  updated_at: string | null
}

export type Product = {
  id: string | null
  name: string
  department: Department | null
  category: Category | null
  product_priority: number | null
  currency: Currency | null
  funding: Funding | null
  benefits: Benefit[] | null
  promotions: Promotion[] | null
  created_at: string | null
  updated_at: string | null
}

export type Funding = {
  id: string | null
  tax: number
  installments: Installment[] | null
  created_at: string | null
  updated_at: string | null
}

export type Installment = {
  id: string
  name: string
  installments: number | null
  minimum_amount_installment: number | null
  interest: boolean
  first_installment_surcharge: number | null
  remaining_installment_surcharge: number | null
  description: string
  created_at: string | null
  updated_at: string | null
}

export type Rate = {
  id: string | null
  year: number
  rate_amount: number
  created_at: string | null
  updated_at: string | null
}

export type Factor = {
  id: string | null
  name: string
  coverage: Coverage | null
  deductible: Deductible | null
  created_at: string | null
  updated_at: string | null
}

export type RiskFactor = Factor & {
  minimum_rate: number
  vehicles: Vehicle[] | null
  rates: Rate[] | null
}

export type HealthDependent = {
  id: string | null
  age: number
  titular_age_amount: number
  dependent_age_amount: number
  created_at: string | null
  updated_at: string | null
}

export type Deductible = {
  id: string | null
  deductible_types: DeductibleType[] | null
  created_at: string | null
  updated_at: string | null
}

export type DeductibleType = {
  id: string | null
  deductible_category: DeductibleCategory | null
  description: string
  created_at: string | null
  updated_at: string | null
}

export type DeductibleCategory = {
  id: string | null
  name: string
  created_at: string | null
  updated_at: string | null
}

export type Vehicle = {
  id: string | null
  brand: Brand
  model: Model
  mandatory_gps: number
  quote_data: QuoteData[]
  plate: string
  created_at: string | null
  updated_at: string | null
}

export type QuoteData = {
  id: string | null
  year: number
  amount: number
  created_at: string | null
  updated_at: string | null
}

export type Brand = {
  id: string | null
  brand_name: string
  created_at: string | null
  updated_at: string | null
}

export type Category = {
  id: string | null
  name: string
  created_at: string | null
  updated_at: string | null
}

export type Coverage = {
  id: string | null
  coverage_types: CoverageType[] | null
  created_at: string | null
  updated_at: string | null
}

export type CoverageType = {
  id: string | null
  coverage_category: CoverageCategory | null
  description: string
  created_at: string | null
  updated_at: string | null
}

export type CoverageCategory = {
  id: string | null
  name: string
  created_at: string | null
  updated_at: string | null
}

export type Currency = {
  id: string | null
  name: string
  description: string | null
  created_at: string | null
  updated_at: string | null
}

export type Benefit = {
  id: string | null
  name: string
  description: string | null
  image: string | null
  created_at: string | null
  updated_at: string | null
}

export type Promotion = {
  id: string | null
  name: string
  description: string | null
  image: string | null
  created_at: string | null
  updated_at: string | null
}

export type Department = {
  id: string | null
  name: string
  description: string
  grouped_departments: string
  disabled: boolean
  description_for_client: string
  created_at: string | null
  updated_at: string | null
}

export type FuelType = {
  id: string | null
  name: string
  description: string | null
  amount: number
  percentage: number
  created_at: string | null
  updated_at: string | null
}

export type Model = {
  id: string | null
  model_name: string
  sub_model: string
  created_at: string | null
  updated_at: string | null
}

export type UseType = {
  id: string | null
  use_type: string
  created_at: string | null
  updated_at: string | null
}

export type VehicularQuoterRequest = {
  id: string | null
  email: string | null
  name: string | null
  phone: string | null
  dni: string | null
  vehicle: Vehicle
  use_type: UseType
  promotional_code: string | null
  produced_at: string | null
  department: Department
  fuel_type: FuelType
}

export type HealthQuoterRequest = {
  id: string | null
  email: string | null
  name: string | null
  phone: string | null
  dni: string | null
  promotional_code: string | null
  born_at: string | null
  dependents: Dependent[] | null
}

export type Dependent = {
  id: number | null
  born_at: string | null
  relationship: string | null
}

export type QuoteResult = {
  product: Product
  quote: number
}

export type ExceptionMessage = {
  causeExceptionClass: string
  causeExceptionMsg: string
  exceptionClass: string
  exceptionMessageData: string
  exceptionMsg: string
}

