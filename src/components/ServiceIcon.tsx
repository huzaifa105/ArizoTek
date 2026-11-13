import React from 'react';
import { Cpu, GitBranch, MessageSquare, Workflow, Wrench, Clock, Layers, TrendingUp } from 'lucide-react';

export const ServiceIcon: React.FC<{
  name: 'cpu' | 'workflow' | 'message' | 'gitbranch';
  className?: string;
}> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'cpu':
      return <Cpu className={className} />;
    case 'workflow':
      return <Workflow className={className} />;
    case 'message':
      return <MessageSquare className={className} />;
    case 'gitbranch':
      return <GitBranch className={className} />;
  }
};

export const FeatureIcon: React.FC<{
  name: 'wrench' | 'clock' | 'layers' | 'trending';
  className?: string;
}> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'wrench':
      return <Wrench className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'trending':
      return <TrendingUp className={className} />;
  }
};
