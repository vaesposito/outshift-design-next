import SdkSidebar from './SdkSidebar'
import './sdk.css'

export default function SdkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sdk-layout">
      <SdkSidebar />
      {children}
    </div>
  )
}
