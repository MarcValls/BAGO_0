#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path


def _ensure_repo_root() -> None:
    for parent in Path(__file__).resolve().parents:
        if (parent / "modules" / "routing" / "backend" / "agent_router.py").is_file():
            root = str(parent)
            if root not in sys.path:
                sys.path.insert(0, root)
            return
    raise RuntimeError("Cannot locate modules/routing/backend/agent_router.py")


_ensure_repo_root()

from modules.routing.backend.agent_router import *  # noqa: F401,F403,E402
from modules.routing.backend.agent_router import main as _main  # noqa: E402


if __name__ == "__main__":
    raise SystemExit(_main())
