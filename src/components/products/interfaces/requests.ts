import { Sort } from '@/components/sort/interface/sort'

export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: null | string;
    city_name: string;
}

export interface Struct {
    number: number;
    unit: any;
}

export interface AttributeValue {
    id: null | string;
    name: string;
    struct: Struct | null;
    source: number;
}

export interface Attribute {
    id: string;
    name: string;
    value_id: null | string;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: Struct | null;
    values: AttributeValue[];
    source: number;
    value_type: string;
}

export interface DifferentialPricing {
    id: number;
}

export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

export interface Seller {
    id: number;
    nickname: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    _: boolean;
    registration_date: string;
    tags: string[];
    car_dealer_logo: string;
    permalink: string;
    seller_reputation: any;
    eshop?: any;
}

export interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
}

export interface SellerAddress {
    comment: string;
    address_line: string;
    id: null;
    latitude: null;
    longitude: null;
    country: Sort;
    state: Sort;
    city: Sort;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: null;
    promise: null;
}

export interface AvailableFilterValue {
    id: string;
    name: string;
    results: number;
}

export interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: AvailableFilterValue[];
}

export interface PadsInfo {
    tracelog: string[];
}

export interface ProductResponse {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: null;
    sale_price: null;
    sold_quantity: number;
    available_quantity: number;
    official_store_id: number | null;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    tags: string[];
    shipping: Shipping;
    stop_time: string;
    seller: Seller;
    seller_address: SellerAddress;
    address: Address;
    attributes: Attribute[];
    installments: Installments;
    winner_item_id: null;
    catalog_listing: boolean;
    discounts: null;
    promotions: any[];
    inventory_id: null | string;
    official_store_name?: string;
    differential_pricing?: DifferentialPricing;
    variation_filters?: string[];
    variations_data?: any;
}

export interface ResponseMethod {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: Paging;
    results: ProductResponse[];
    sort: Sort;
    available_sorts: Sort[];
    filters: any[];
    available_filters: AvailableFilter[];
    pads_info: PadsInfo;
}
