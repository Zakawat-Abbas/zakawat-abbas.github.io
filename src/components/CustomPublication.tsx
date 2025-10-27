import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { SiIeee, SiResearchgate } from 'react-icons/si';
import { IoMdDownload } from "react-icons/io";

type Props = {
  researchGateUrl: string;
  ieeeUrl: string;
  abstract: string;
  pdfUrl?: string;
};

const CustomPublication = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          onClick={() => setOpen(!open)}
          variant="outline"
          size="sm"
          className="gap-1"
        >
          Abstract
          {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
        >
          <a href={props.researchGateUrl} target="_blank">
            <SiResearchgate />
          </a>

        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
        >
          <a href={props.ieeeUrl} target="_blank">
            <SiIeee size="2.5em" />
          </a>
        </Button>
        {props.pdfUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <a href={props.pdfUrl} target="_blank">
              <IoMdDownload />
            </a>
          </Button>
        )}
      </div>
      {open && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {props.abstract}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomPublication;
