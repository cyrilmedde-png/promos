import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'discount' | 'vip' | 'hot' | 'new' | 'expiring'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    discount: 'bg-red-500 text-white font-bold',
    vip: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold',
    hot: 'bg-orange-500 text-white animate-pulse',
    new: 'bg-emerald-500 text-white',
    expiring: 'bg-red-100 text-red-700 border border-red-200',
  }
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs', variants[variant], className)}>
      {children}
    </span>
  )
}
