#!/usr/bin/env python3
"""
   _
 >(o )
   )/_
   '  `
"""
from typing import Optional, Any, Sequence


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """duck typing an iterable"""
    if lst:
        return lst[0]
    else:
        return None