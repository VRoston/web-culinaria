try { vagrant up proxy } catch { Write-Host "Proxy failed, continuing..." }
try { vagrant up app } catch { Write-Host "App failed, continuing..." }
try { vagrant up db } catch { Write-Host "Db failed, continuing..." }