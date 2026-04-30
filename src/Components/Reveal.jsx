import { useInView } from '../utils/useInView'

const variantClass = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  zoom: 'reveal reveal-zoom',
}

const Reveal = ({ children, variant = 'up', delay = 0, className = '', as: Tag = 'div' }) => {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${variantClass[variant] || variantClass.up} ${inView ? 'visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
