// 自定义材料科学和能源技术相关图标组件
interface IconProps {
  className?: string;
}

// 太阳能电池板图标
export const SolarPanelIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <line x1="6" y1="6" x2="6" y2="18"/>
    <line x1="10" y1="6" x2="10" y2="18"/>
    <line x1="14" y1="6" x2="14" y2="18"/>
    <line x1="18" y1="6" x2="18" y2="18"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
    <line x1="2" y1="14" x2="22" y2="14"/>
    <circle cx="12" cy="3" r="1"/>
    <path d="M12 2l1 1m-2 0l1-1"/>
  </svg>
)

// 分子结构图标
export const MolecularIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="6" cy="6" r="2"/>
    <circle cx="18" cy="6" r="2"/>
    <circle cx="6" cy="18" r="2"/>
    <circle cx="18" cy="18" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <line x1="8" y1="6" x2="10" y2="12"/>
    <line x1="16" y1="6" x2="14" y2="12"/>
    <line x1="8" y1="18" x2="10" y2="12"/>
    <line x1="16" y1="18" x2="14" y2="12"/>
    <circle cx="3" cy="12" r="1"/>
    <circle cx="21" cy="12" r="1"/>
    <line x1="5" y1="12" x2="10" y2="12"/>
    <line x1="19" y1="12" x2="14" y2="12"/>
  </svg>
)

// AI芯片图标
export const AIChipIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="6" y="6" width="12" height="12" rx="2"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M8 8l2 2m4-2l-2 2m-2 4l2-2m4 2l-2-2"/>
    <line x1="9" y1="2" x2="9" y2="6"/>
    <line x1="15" y1="2" x2="15" y2="6"/>
    <line x1="9" y1="18" x2="9" y2="22"/>
    <line x1="15" y1="18" x2="15" y2="22"/>
    <line x1="2" y1="9" x2="6" y2="9"/>
    <line x1="18" y1="9" x2="22" y2="9"/>
    <line x1="2" y1="15" x2="6" y2="15"/>
    <line x1="18" y1="15" x2="22" y2="15"/>
  </svg>
)

// 能源存储系统图标
export const EnergyStorageIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="3" y="7" width="18" height="10" rx="2"/>
    <rect x="5" y="9" width="4" height="6" rx="1"/>
    <rect x="10" y="9" width="4" height="6" rx="1"/>
    <rect x="15" y="9" width="4" height="6" rx="1"/>
    <line x1="8" y1="11" x2="8" y2="13"/>
    <line x1="13" y1="11" x2="13" y2="13"/>
    <line x1="18" y1="11" x2="18" y2="13"/>
    <path d="M7 5v2m5-2v2m5-2v2"/>
    <path d="M12 19v2"/>
  </svg>
)

// 钙钛矿晶体结构图标
export const PerovskiteIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="6" y="6" width="12" height="12" rx="1"/>
    <circle cx="9" cy="9" r="1"/>
    <circle cx="15" cy="9" r="1"/>
    <circle cx="9" cy="15" r="1"/>
    <circle cx="15" cy="15" r="1"/>
    <circle cx="12" cy="12" r="1.5"/>
    <line x1="9" y1="9" x2="12" y2="12"/>
    <line x1="15" y1="9" x2="12" y2="12"/>
    <line x1="9" y1="15" x2="12" y2="12"/>
    <line x1="15" y1="15" x2="12" y2="12"/>
  </svg>
)

// 实验室设备图标
export const LabEquipmentIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M9 2v6l-2 4h10l-2-4V2"/>
    <path d="M7 12v8a2 2 0 002 2h6a2 2 0 002-2v-8"/>
    <circle cx="12" cy="16" r="1"/>
    <line x1="10" y1="2" x2="14" y2="2"/>
  </svg>
)

// 神经网络图标
export const NeuralNetworkIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <circle cx="4" cy="6" r="2"/>
    <circle cx="4" cy="18" r="2"/>
    <circle cx="12" cy="4" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="20" r="2"/>
    <circle cx="20" cy="8" r="2"/>
    <circle cx="20" cy="16" r="2"/>
    <line x1="6" y1="6" x2="10" y2="4"/>
    <line x1="6" y1="6" x2="10" y2="12"/>
    <line x1="6" y1="18" x2="10" y2="12"/>
    <line x1="6" y1="18" x2="10" y2="20"/>
    <line x1="14" y1="4" x2="18" y2="8"/>
    <line x1="14" y1="12" x2="18" y2="8"/>
    <line x1="14" y1="12" x2="18" y2="16"/>
    <line x1="14" y1="20" x2="18" y2="16"/>
  </svg>
)

// 界面工程图标
export const InterfaceIcon = ({ className }: IconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <rect x="2" y="8" width="20" height="2"/>
    <rect x="2" y="14" width="20" height="2"/>
    <line x1="6" y1="4" x2="6" y2="8"/>
    <line x1="10" y1="4" x2="10" y2="8"/>
    <line x1="14" y1="4" x2="14" y2="8"/>
    <line x1="18" y1="4" x2="18" y2="8"/>
    <line x1="6" y1="16" x2="6" y2="20"/>
    <line x1="10" y1="16" x2="10" y2="20"/>
    <line x1="14" y1="16" x2="14" y2="20"/>
    <line x1="18" y1="16" x2="18" y2="20"/>
    <circle cx="8" cy="11" r="1"/>
    <circle cx="16" cy="11" r="1"/>
  </svg>
) 