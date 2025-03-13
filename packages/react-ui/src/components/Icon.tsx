import React from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  variant?: 'solid' | 'outline';
}

const Icon: React.FC<IconProps> = ({ name, variant = 'outline', className, ...props }) => {
  const icons = variant === 'solid' ? SolidIcons : OutlineIcons;
  const IconComponent = icons[`${name}Icon`];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Heroicons (${variant})`);
    return null;
  }

  return <IconComponent {...props} className={className} />;
};

export default Icon;
