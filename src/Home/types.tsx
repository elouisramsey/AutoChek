export interface CarProps {
  name: string
  id: number
  imageUrl: string
}

export interface CardetailsProps {
  bodyTypeId?: string | number
  ccMeasurement?: number
  city?: string
  depositReceived?: boolean
  fuelType?: string
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
