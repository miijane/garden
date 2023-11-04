{
    description = "mijane digital garden";

    inputs = {
        nixpkgs = { url = "github:NixOS/nixpkgs/nixpkgs-unstable"; };        
        flake-utils = { url = "github:numtide/flake-utils"; };
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
            let 
                inherit (nixpkgs.lib) optional;
                pkgs = import nixpkgs { inherit system; };

                bun = pkgs.bun;
            in 
            {
                devShell = pkgs.mkShell {
                    buildInputs = [
                        bun
                    ];
                };
            }
        );
}