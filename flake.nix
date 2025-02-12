{
    description = "audio2yt";
    inputs.nixpkgs.url = "nixpkgs/nixos-unstable";
    outputs = { self, nixpkgs }: let
        system = "x86_64-linux";
        pkgs = import nixpkgs { inherit system; };
    in {
        devShells.${system}.default = pkgs.mkShell {
            packages = with pkgs; [ bun ];
            shellHook = ''
                export PS1="\w $ ";
                cd app && bun run dev
            '';
        };
    };
}
