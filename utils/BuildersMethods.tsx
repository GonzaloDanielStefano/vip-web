import axios from "axios";
import { Brand, Category, Coverage, CoverageCategory, CoverageType, Currency, Department, ExceptionMessage, Factor, FuelType, Insurance, Model, Product, QuoteData, Rate, RoleType, User, UseType, Vehicle, VehicularQuoterRequest, QuoteResult, Funding, Installment, Deductible, DeductibleType, DeductibleCategory, HealthDependent, RiskFactor, HealthFactor, VehicularProduct, HealthProduct, Benefit, Clinic, Promotion } from "../interfaces";

export abstract class BuildersMethods {
    static buildCategories(theCategories: Category[]) {
        let categories: Category[] = [];
        if (theCategories?.length > 0) {
            for (let category of theCategories) {
                categories.push(this.buildCategory(
                    category.id,
                    category.name,
                    category.created_at,
                    category.updated_at))
            }
        }
        return categories;
    }

    static buildDepartments(theDepartments: Department[]) {
        let departments: Department[] = [];
        if (theDepartments?.length > 0) {
            for (let department of theDepartments) {
                departments.push(this.buildDepartment(
                    department.id,
                    department.name,
                    department.description,
                    department.grouped_departments,
                    department.disabled,
                    department.description_for_client,
                    department.created_at,
                    department.updated_at));
            }
        }

        return departments;
    }
    static buildDepartment(theId: string | null, theName: string, theDescription: string,
        theGroupedDepartments: string, theDisabled: boolean, theDescriptionForClient: string,
        theCreated_at: string | null, theUpdated_at: string | null): Department {
        let department: Department = {
            id: theId,
            name: theName,
            description: theDescription,
            grouped_departments: theGroupedDepartments,
            disabled: theDisabled,
            description_for_client: theDescriptionForClient,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return department;
    }


    static buildFuelTypes(theFuelTypes: FuelType[]) {
        let fuelTypes: FuelType[] = [];
        if (theFuelTypes?.length > 0) {
            for (let fuelType of theFuelTypes) {
                fuelTypes.push(this.buildFuelType(
                    fuelType.id,
                    fuelType.name,
                    fuelType.description,
                    fuelType.amount,
                    fuelType.percentage,
                    fuelType.created_at,
                    fuelType.updated_at));
            }
        }

        return fuelTypes;
    }

    static buildFuelType(theId: string | null, theName: string, theDescription: string, theAmount: number,
        thePercentage: number, theCreated_at: string | null, theUpdated_at: string | null): FuelType {

        let fuelType: FuelType = {
            id: theId,
            name: theName,
            description: theDescription,
            amount: theAmount,
            percentage: thePercentage,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }


        return fuelType;
    }

    static buildCurrencies(theCurrencies: Currency[]) {
        let currencies: Currency[] = [];
        if (theCurrencies?.length > 0) {
            for (let currency of theCurrencies) {
                currencies.push(this.buildCurrency(
                    currency.id,
                    currency.name,
                    currency.description,
                    currency.created_at,
                    currency.updated_at));
            }
        }

        return currencies;
    }

    static buildCurrency(theId: string | null, theName: string, theDescription: string | null, theCreated_at: string | null,
        theUpdated_at: string | null): Currency {
        let currency: Currency = {
            id: theId,
            name: theName,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return currency;
    }

    static buildPromotions(thePromotions: Promotion[]) {
        let promotions: Promotion[] = [];
        if (thePromotions?.length > 0) {
            for (let promotion of thePromotions) {
                promotions.push(this.buildPromotion(
                    promotion.id,
                    promotion.name,
                    promotion.description,
                    promotion.image,
                    promotion.created_at,
                    promotion.updated_at));
            }
        }

        return promotions;
    }

    static buildPromotion(theId: string | null, theName: string, theDescription: string | null, theImage: string | null, theCreated_at: string | null, theUpdated_at: string | null): Promotion {
        let promotion: Promotion = {
            id: theId,
            name: theName,
            image: theImage,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return promotion;
    }

    static buildBenefits(theBenefits: Benefit[]) {
        let benefits: Benefit[] = [];
        if (theBenefits?.length > 0) {
            for (let benefit of theBenefits) {
                benefits.push(this.buildBenefit(
                    benefit.id,
                    benefit.name,
                    benefit.description,
                    benefit.image,
                    benefit.created_at,
                    benefit.updated_at));
            }
        }

        return benefits;
    }

    static buildBenefit(theId: string | null, theName: string, theDescription: string | null, theImage: string | null, theCreated_at: string | null,
        theUpdated_at: string | null): Benefit {
        let benefit: Benefit = {
            id: theId,
            name: theName,
            image: theImage,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return benefit;
    }

    static buildClinics(theClinics: Clinic[]) {
        let clinics: Clinic[] = [];
        if (theClinics?.length > 0) {
            for (let clinic of theClinics) {
                clinics.push(this.buildClinic(
                    clinic.id,
                    clinic.name,
                    clinic.description,
                    clinic.created_at,
                    clinic.updated_at));
            }
        }

        return clinics;
    }

    static buildClinic(theId: string | null, theName: string, theDescription: string | null, theCreated_at: string | null,
        theUpdated_at: string | null): Clinic {
        let clinic: Clinic = {
            id: theId,
            name: theName,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return clinic;
    }


    static buildUseTypes(theUseTypes: UseType[]) {
        let useTypes: UseType[] = [];
        if (theUseTypes?.length > 0) {
            for (let useType of theUseTypes) {
                useTypes.push(this.buildUseType(
                    useType.id,
                    useType.use_type,
                    useType.created_at,
                    useType.updated_at));
            }
        }

        return useTypes;
    }

    static buildUseType(theId: string | null, theUseType: string, theCreated_at: string | null,
        theUpdated_at: string | null): UseType {
        let useType: UseType = {
            id: theId,
            use_type: theUseType,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return useType;
    }

    static buildInsurances(theInsurances: Insurance[]) {
        let insurances: Insurance[] = [];
        if (theInsurances?.length > 0) {
            for (let insurance of theInsurances) {
                insurances.push(this.buildInsurance(insurance.id,
                    insurance.insurance_name,
                    insurance.description,
                    insurance.trade_mark,
                    insurance.vehicular_products,
                    insurance.health_products,
                    insurance.created_at,
                    insurance.updated_at));
            }
        }

        return insurances;
    }

    static buildInsurance(theId: string | null, theInsuranceName: string, theDescription: string,
        theTradeMark: string, theVehicularProducts: VehicularProduct[], theHealthsProducts: HealthProduct[],
        theCreated_at: string | null, theUpdated_at: string | null) {
        let insurance: Insurance = {
            id: theId,
            insurance_name: theInsuranceName,
            description: theDescription,
            vehicular_products: this.buildVehicularProducts(theVehicularProducts),
            health_products: this.buildHealthProducts(theHealthsProducts),
            trade_mark: theTradeMark,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        };

        return insurance;
    }

    static buildProducts(theProducts: Product[]) {
        let products: Product[] = [];

        if (theProducts?.length > 0) {
            for (let product of theProducts) {
                if ("risk_factor" in product) {
                    let vehicularProduct = product as VehicularProduct
                    products.push(this.buildVehicularProduct(
                        vehicularProduct.id,
                        vehicularProduct.name,
                        vehicularProduct.category,
                        vehicularProduct.product_priority,
                        vehicularProduct.department,
                        vehicularProduct.currency,
                        vehicularProduct.use_type,
                        vehicularProduct.fuel_type,
                        vehicularProduct.funding,
                        vehicularProduct.risk_factors,
                        vehicularProduct.benefits,
                        vehicularProduct.promotions,
                        vehicularProduct.created_at,
                        vehicularProduct.updated_at))
                } else {
                    let healthProduct = product as HealthProduct
                    products.push(this.buildHealthProduct(
                        healthProduct.id,
                        healthProduct.name,
                        healthProduct.department,
                        healthProduct.category,
                        healthProduct.product_priority,
                        healthProduct.currency,
                        healthProduct.funding,
                        healthProduct.clinics,
                        healthProduct.health_factors,
                        healthProduct.benefits,
                        healthProduct.promotions,
                        healthProduct.created_at,
                        healthProduct.updated_at))
                }
            }

        }
    }

    static buildHealthProducts(theHealthsProducts: HealthProduct[]): HealthProduct[] {
        let products: HealthProduct[] = [];

        if (theHealthsProducts?.length > 0) {
            for (let product of theHealthsProducts) {
                products.push(this.buildHealthProduct(
                    product.id,
                    product.name,
                    product.department,
                    product.category,
                    product.product_priority,
                    product.currency,
                    product.funding,
                    product.clinics,
                    product.health_factors,
                    product.benefits,
                    product.promotions,
                    product.created_at,
                    product.updated_at
                ));
            }
        }

        return products;
    }
    static buildVehicularProducts(theVehicularProducts: VehicularProduct[]): VehicularProduct[] {
        let products: VehicularProduct[] = [];

        if (theVehicularProducts?.length > 0) {
            for (let product of theVehicularProducts) {
                products.push(this.buildVehicularProduct(
                    product.id,
                    product.name,
                    product.category,
                    product.product_priority,
                    product.department,
                    product.currency,
                    product.use_type,
                    product.fuel_type,
                    product.funding,
                    product.risk_factors,
                    product.benefits,
                    product.promotions,
                    product.created_at,
                    product.updated_at
                ));
            }
        }

        return products;
    }

    static buildVehicularProduct(theId: string, theName: string, theCategory: Category, theProductPriority: number, theDepartment: Department, theCurrency: Currency, theUseType: UseType, theFuelType: FuelType, theFunding: Funding, theFactors: RiskFactor[],
        theBenefits: Benefit[], thePromotions: Promotion[], theCreated_at: string | null, theUpdated_at: string | null): VehicularProduct {
        let product: VehicularProduct = {
            id: theId,
            name: theName,
            category: this.buildCategory(
                theCategory.id,
                theCategory.name,
                theCategory.created_at,
                theCategory.updated_at),
            product_priority: theProductPriority,
            department: theDepartment !== null ? this.buildDepartment(
                theDepartment.id,
                theDepartment.name,
                theDepartment.description,
                theDepartment.grouped_departments,
                theDepartment.disabled,
                theDepartment.description_for_client,
                theDepartment.created_at,
                theDepartment.updated_at) : null,
            currency: this.buildCurrency(
                theCurrency.id,
                theCurrency.name,
                theCurrency.description,
                theCurrency.created_at,
                theCurrency.updated_at),
            use_type: this.buildUseType(
                theUseType.id,
                theUseType.use_type,
                theUseType.created_at,
                theUseType.updated_at),
            fuel_type: this.buildFuelType(
                theFuelType.id,
                theFuelType.name,
                theFuelType.description,
                theFuelType.amount,
                theFuelType.percentage,
                theFuelType.created_at,
                theFuelType.updated_at),
            funding: theFunding !== null ? this.buildFunding(
                theFunding.id,
                theFunding.tax,
                theFunding.installments,
                theFunding.created_at,
                theFunding.updated_at) : null,
            risk_factors: this.buildRiskFactors(theFactors),
            benefits: this.buildBenefits(theBenefits),
            promotions: this.buildPromotions(thePromotions),
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return product;
    }

    static buildHealthProduct(theId: string, theName: string, theDepartment: Department, theCategory: Category, theProductPriority: number, theCurrency: Currency, theFunding: Funding, theClinics: Clinic[], theFactors: HealthFactor[], theBenefits: Benefit[],
        thePromotions: Promotion[], theCreated_at: string | null, theUpdated_at: string | null): HealthProduct {
        let product: HealthProduct = {
            id: theId,
            name: theName,
            department: theDepartment !== null ? this.buildDepartment(
                theDepartment.id,
                theDepartment.name,
                theDepartment.description,
                theDepartment.grouped_departments,
                theDepartment.disabled,
                theDepartment.description_for_client,
                theDepartment.created_at,
                theDepartment.updated_at) : null,
            category: this.buildCategory(
                theCategory.id,
                theCategory.name,
                theCategory.created_at,
                theCategory.updated_at),
            product_priority: theProductPriority,
            clinics: this.buildClinics(theClinics),
            currency: this.buildCurrency(
                theCurrency.id,
                theCurrency.name,
                theCurrency.description,
                theCurrency.created_at,
                theCurrency.updated_at),
            funding: theFunding !== null ? this.buildFunding(
                theFunding.id,
                theFunding.tax,
                theFunding.installments,
                theFunding.created_at,
                theFunding.updated_at) : null,
            health_factors: this.buildHealthFactors(theFactors),
            benefits: this.buildBenefits(theBenefits),
            promotions: this.buildPromotions(thePromotions),
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return product;
    }

    static buildFunding(theId: string, theTax: number, theInstallments: Installment[], theCreated_at: string,
        theUpdated_at: string): Funding {

        let funding: Funding = {
            id: theId,
            tax: theTax,
            installments: this.buildInstallments(theInstallments),
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return funding;
    }

    static buildInstallments(theInstallments: Installment[]): Installment[] {
        let installments: Installment[] = [];
        if (theInstallments?.length > 0) {
            for (let installment of theInstallments) {
                installments.push(this.buildInstallment(
                    installment.id,
                    installment.name,
                    installment.installments,
                    installment.minimum_amount_installment,
                    installment.interest,
                    installment.first_installment_surcharge,
                    installment.remaining_installment_surcharge,
                    installment.description,
                    installment.created_at,
                    installment.updated_at
                ));
            }
        }

        return installments;
    }

    static buildInstallment(theId: string, theName: string, theInstallments: number, theMinimum_amount_installment: number, theInteres: boolean, theFirst_installment_surcharge: number, theRemaining_installment_surcharge: number, theDescription: string, theCreated_at: string, theUpdated_at: string) {
        let installment: Installment = {
            id: theId,
            name: theName,
            installments: theInstallments,
            interest: theInteres,
            minimum_amount_installment: theMinimum_amount_installment,
            first_installment_surcharge: theFirst_installment_surcharge,
            remaining_installment_surcharge: theRemaining_installment_surcharge,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return installment;
    }

    static buildRiskFactors(theFactors: RiskFactor[]): RiskFactor[] {
        let factors: RiskFactor[] = [];

        if (theFactors?.length > 0) {
            for (let factor of theFactors) {
                factors.push(this.buildRiskFactor(
                    factor.id,
                    factor.name,
                    factor.minimum_rate,
                    factor.vehicles,
                    factor.rates,
                    factor.coverage,
                    factor.deductible,
                    factor.created_at,
                    factor.updated_at
                ))
            }
        }

        return factors;
    }

    static buildHealthFactors(theFactors: HealthFactor[]): HealthFactor[] {
        let factors: HealthFactor[] = [];

        if (theFactors?.length > 0) {
            for (let factor of theFactors) {
                factors.push(this.buildHealthFactor(
                    factor.id,
                    factor.name,
                    factor.health_dependents,
                    factor.coverage,
                    factor.deductible,
                    factor.created_at,
                    factor.updated_at
                ))
            }
        }

        return factors;
    }

    static buildHealthFactor(theId: string, theName: string, theHealthDependents: HealthDependent[], theCoverage: Coverage, theDeductible: Deductible, theCreated_at: string, theUpdated_at: string): HealthFactor {
        let factor: HealthFactor = {
            id: theId,
            name: theName,
            health_dependents: theHealthDependents !== null ? this.buildHealthDependents(theHealthDependents) : [],
            coverage: theCoverage !== null ? this.buildCoverage(theCoverage) : null,
            deductible: theDeductible !== null ? this.buildDeductible(theDeductible) : null,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return factor;
    }

    static buildRiskFactor(theId: string, theName: string, theMinimum_rate: number, theVehicles: Vehicle[], theRates: Rate[], theCoverage: Coverage, theDeductible: Deductible, theCreated_at: string, theUpdated_at: string): RiskFactor {
        let factor: RiskFactor = {
            id: theId,
            name: theName,
            minimum_rate: theMinimum_rate,
            vehicles: theVehicles !== null ? this.buildVehicles(theVehicles) : [],
            rates: theRates !== null ? this.buildRates(theRates) : [],
            coverage: theCoverage !== null ? this.buildCoverage(theCoverage) : null,
            deductible: theDeductible !== null ? this.buildDeductible(theDeductible) : null,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return factor;
    }

    static buildHealthDependents(theHealthDependents: HealthDependent[]): HealthDependent[] {
        let healthDependents: HealthDependent[] = [];

        if (theHealthDependents?.length > 0) {
            for (let healthDependent of theHealthDependents) {
                healthDependents.push(this.buildHealthDependent(
                    healthDependent.id,
                    healthDependent.age,
                    healthDependent.titular_age_amount,
                    healthDependent.dependent_age_amount,
                    healthDependent.created_at,
                    healthDependent.updated_at
                ))
            }
        }

        return healthDependents;
    }

    static buildHealthDependent(theId: string, theAge: number, theTitular_age_amount: number, theDependent_age_amount: number, theCreated_at: string, theUpdated_at: string): HealthDependent {
        let healthDependent: HealthDependent = {
            id: theId,
            age: theAge,
            titular_age_amount: theTitular_age_amount,
            dependent_age_amount: theDependent_age_amount,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return healthDependent;
    }

    static buildDeductible(theDeductible: Deductible): Deductible {
        let deductible: Deductible = {
            id: theDeductible.id,
            deductible_types: this.buildDeductibleTypes(theDeductible.deductible_types),
            created_at: theDeductible.created_at,
            updated_at: theDeductible.updated_at
        }

        return deductible;
    }

    static buildDeductibleTypes(theDeductibleTypes: DeductibleType[]): DeductibleType[] {
        let deductibleTypes: DeductibleType[] = [];

        if (theDeductibleTypes?.length > 0) {
            for (let deductibleType of theDeductibleTypes) {
                let deductibleCategory = deductibleType.deductible_category;

                if (deductibleCategory !== undefined) {
                    deductibleCategory = this.buildDeductibleCategory(deductibleCategory.id,
                        deductibleCategory.name, deductibleCategory.created_at, deductibleCategory.updated_at);
                }

                deductibleTypes.push(this.buildDeductibleType(
                    deductibleType.id,
                    deductibleCategory,
                    deductibleType.description,
                    deductibleType.created_at,
                    deductibleType.updated_at
                ));
            }
        }

        return deductibleTypes;
    }

    static buildDeductibleCategories(theDeductibleCategories: DeductibleCategory[]) {
        let deductibleCategories: DeductibleCategory[] = [];

        if (theDeductibleCategories?.length > 0) {
            for (let deductibleCategory of theDeductibleCategories) {
                deductibleCategories.push(this.buildDeductibleCategory(
                    deductibleCategory.id,
                    deductibleCategory.name,
                    deductibleCategory.created_at,
                    deductibleCategory.updated_at
                ));
            }
        }

        return deductibleCategories;
    }


    static buildDeductibleCategory(theId: string, theDeductibleCategoryName: string,
        theCreated_at: string, theUpdated_at: string): DeductibleCategory {
        let deductibleCategory: DeductibleCategory = {
            id: theId,
            name: theDeductibleCategoryName,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return deductibleCategory;
    }

    static buildDeductibleType(theId: string, theDeductibleCategory: DeductibleCategory,
        theDescription: string, theCreated_at: string, theUpdated_at: string): DeductibleType {
        let deductibleType: DeductibleType = {
            id: theId,
            deductible_category: theDeductibleCategory,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return deductibleType;
    }

    static buildCoverage(theCoverage: Coverage): Coverage {
        let coverage: Coverage = {
            id: theCoverage.id,
            coverage_types: this.buildCoverageTypes(theCoverage.coverage_types),
            created_at: theCoverage.created_at,
            updated_at: theCoverage.updated_at
        }

        return coverage;
    }

    static buildCoverageTypes(theCoverageTypes: CoverageType[]): CoverageType[] {
        let coverageTypes: CoverageType[] = [];

        if (theCoverageTypes?.length > 0) {
            for (let coverageType of theCoverageTypes) {
                let coverageCategory = coverageType.coverage_category;

                if (coverageCategory !== undefined) {
                    coverageCategory = this.buildCoverageCategory(coverageCategory.id,
                        coverageCategory.name, coverageCategory.created_at, coverageCategory.updated_at);
                }

                coverageTypes.push(this.buildCoverageType(
                    coverageType.id,
                    coverageCategory,
                    coverageType.description,
                    coverageType.created_at,
                    coverageType.updated_at
                ));
            }
        }

        return coverageTypes;
    }

    static buildCoverageCategories(theCoverageCategories: CoverageCategory[]) {
        let coverageCategories: CoverageCategory[] = [];

        if (theCoverageCategories?.length > 0) {
            for (let coverageCategory of theCoverageCategories) {
                coverageCategories.push(this.buildCoverageCategory(
                    coverageCategory.id,
                    coverageCategory.name,
                    coverageCategory.created_at,
                    coverageCategory.updated_at
                ));
            }
        }

        return coverageCategories;
    }


    static buildCoverageCategory(theId: string, theCoverageCategoryName: string,
        theCreated_at: string, theUpdated_at: string): CoverageCategory {
        let coverageCategory: CoverageCategory = {
            id: theId,
            name: theCoverageCategoryName,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return coverageCategory;
    }

    static buildCoverageType(theId: string, theCoverageCategory: CoverageCategory,
        theDescription: string, theCreated_at: string, theUpdated_at: string): CoverageType {
        let coverageType: CoverageType = {
            id: theId,
            coverage_category: theCoverageCategory,
            description: theDescription,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return coverageType;
    }

    static buildRates(theRates: Rate[]): Rate[] {
        let rates: Rate[] = [];

        if (theRates?.length > 0) {
            for (let rate of theRates) {
                rates.push(this.buildRate(
                    rate.id,
                    rate.year,
                    rate.rate_amount,
                    rate.created_at,
                    rate.updated_at
                ))
            }
        }

        return rates;
    }

    static buildRate(theId: string, theYear: number, theRate_amount: number, theCreated_at: string,
        theUpdated_at: string): Rate {
        let rate: Rate = {
            id: theId,
            year: theYear,
            rate_amount: theRate_amount,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return rate;
    }

    static buildVehicles(theVehicles: Vehicle[]): Vehicle[] {
        let vehicles: Vehicle[] = [];
        if (theVehicles?.length > 0) {
            for (let vehicle of theVehicles) {
                vehicles.push(this.buildVehicle(
                    vehicle.id,
                    vehicle.brand,
                    vehicle.model,
                    vehicle.mandatory_gps,
                    vehicle.quote_data,
                    vehicle.plate,
                    vehicle.created_at,
                    vehicle.updated_at
                ))
            }
        }

        return vehicles;
    }

    static buildVehicle(theId: string, theBrand: Brand, theModel: Model, theMandatory_gps: number, theQuotesData: QuoteData[], thePlate: string, theCreated_at: string, theUpdated_at: string): Vehicle {
        let vehicle: Vehicle = {
            id: theId,
            brand: this.buildBrand(theBrand.id, theBrand.brand_name, theBrand.created_at, theBrand.updated_at),
            model: this.buildModel(theModel.id, theModel.model_name, theModel.sub_model, theModel.created_at, theModel.updated_at),
            mandatory_gps: theMandatory_gps,
            quote_data: this.buildQuoteDataList(theQuotesData),
            plate: thePlate,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return vehicle;
    }

    static buildQuoteDataList(theQuotesData: QuoteData[]): QuoteData[] {
        let quotesData: QuoteData[] = [];
        if (theQuotesData?.length > 0) {
            for (let quote of theQuotesData) {
                quotesData.push(this.buildQuoteData(quote.id, quote.year, quote.amount, quote.created_at, quote.updated_at));
            }
        }

        return quotesData;
    }
    static buildQuoteData(theId: string, theYear: number, theAmount: number, theCreated_at: string, theUpdated_at: string): QuoteData {
        let quoteData: QuoteData = {
            id: theId,
            year: theYear,
            amount: theAmount,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return quoteData;
    }


    static buildModel(theId: string, theModel_name: string, theSubmodel: string, theCreated_at: string, theUpdated_at: string): Model {
        let model: Model = {
            id: theId,
            model_name: theModel_name,
            sub_model: theSubmodel,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return model;
    }

    static buildBrand(theId: string, theBrand_name: string, theCreated_at: string, theUpdated_at: string): Brand {
        let brand: Brand = {
            id: theId,
            brand_name: theBrand_name,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return brand;
    }

    static buildCategory(theId: string, theName: string, theCreated_at: string, theUpdated_at: string): Category {
        let category: Category = {
            id: theId,
            name: theName,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        }

        return category;
    }

    static buildUsuario(theId: string, theName: string, theEmail: string, thePassword: string,
        theToken: string, theRefreshToken: string, theRoles: [RoleType] | null, theCreated_at: string,
        theUpdated_at: string): User {

        let user: User = {
            id: theId,
            name: theName,
            email: theEmail,
            password: thePassword,
            token: theToken,
            refreshToken: theRefreshToken,
            roles: theRoles,
            created_at: theCreated_at,
            updated_at: theUpdated_at
        };

        return user;
    }

    static buildVehicularQuoterRequest(theId: string, theEmail: string, theName: string, thePhone: string,
        theDni: string, theVehicle: Vehicle, theUseType: UseType, thePromotionalCode: string, theProduced_at: string,
        theDepartment: Department, theFuelType: FuelType): VehicularQuoterRequest {
        let vehicularQuoterRequest: VehicularQuoterRequest = {
            id: theId,
            email: theEmail,
            name: theName,
            phone: thePhone,
            dni: theDni,
            vehicle: this.buildVehicle(theVehicle.id, theVehicle.brand, theVehicle.model, theVehicle.mandatory_gps,
                theVehicle.quote_data, theVehicle.plate, theVehicle.created_at, theVehicle.updated_at),
            use_type: this.buildUseType(theUseType.id, theUseType.use_type, theUseType.created_at, theUseType.updated_at),
            promotional_code: thePromotionalCode,
            produced_at: theProduced_at,
            department: this.buildDepartment(theDepartment.id, theDepartment.name, theDepartment.description, theDepartment.grouped_departments, theDepartment.disabled, theDepartment.description_for_client, theDepartment.created_at, theDepartment.updated_at),
            fuel_type: this.buildFuelType(theFuelType.id, theFuelType.name, theFuelType.description, theFuelType.amount, theFuelType.percentage, theFuelType.created_at, theFuelType.updated_at)

        }

        return vehicularQuoterRequest;
    }

    static buildQuoteResults(theQuoteResults: QuoteResult[]): QuoteResult[] {
        let quoteResults: QuoteResult[] = [];
        if (theQuoteResults?.length > 0) {
            for (let quoteResult of theQuoteResults) {
                quoteResults.push(this.buildQuoteResult(
                    quoteResult.product, quoteResult.quote
                ))
            }
        }

        return quoteResults;
    }

    static buildQuoteResult(theProduct: Product, theQuote: number): QuoteResult {
        let quoteResult: QuoteResult = {
            product: theProduct,
            quote: theQuote

        }

        return quoteResult;
    }

    static buildError(error: any) {
        const { response } = error;
        if (axios.isAxiosError(error) && response?.data) {
            var data: ExceptionMessage = response.data;
            return data.exceptionMsg;
        }
        return 'An unexpected error occurred.';
    }

    static buildDateFormat(theDate: String) {
        return (theDate !== null) ? theDate.substring(0, 10) : null;
    }
}




