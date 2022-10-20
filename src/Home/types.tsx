export interface CarProps {
  name: string
  id: number
  imageUrl: string
}

export interface CardetailsProps {
  bodyTypeId?: string | number
  carName?: string
  ccMeasurement?: number
  city?: string
  depositReceived?: boolean
  engineType?: string
  fuelType?: string
  exteriorColor?: string
  insured?: boolean
  isFeatured?: boolean
  interiorColor?: string
  bodyType?: {
    id: number
    imageUrl: string
    name: string
  }
  vin?: string
  model?: {
    id: number
    imageUrl: string
    name: string
    popular: string
    series: string
    wheelType: string
  }
  ownerType?: string
  country?: string
  gradeScore?: number
  hasFinancing?: boolean
  hasThreeDImage?: boolean
  hasWarranty?: boolean
  id: string
  imageUrl: string
  installment?: number
  loanValue?: number
  marketplaceOldPrice?: number
  marketplacePrice?: number
  marketplaceVisibleDate?: string
  mileage?: number
  mileageUnit?: string
  sellingCondition?: string
  sold?: boolean
  state?: string
  stats?: {
    appViewCount: number
    appViewerCount: number
    interestCount: number
    processedLoanCount: number
    testDriveCount: number
    webViewCount: number
    webViewerCount: number
  }
  title: string
  transmission?: string
  websiteUrl?: string
  year?: number
}
